package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

// Todo 結構體定義
type Todo struct {
	ID        string `json:"id"`
	TaskName  string `json:"taskName"`
	Completed bool   `json:"completed"`
	IsEditing bool   `json:"isEditing"`
}

// 全域變數，用於儲存todos（目前先不使用資料庫）
var todos = []Todo{}

// CORS 中間件
func enableCors(w http.ResponseWriter) {
	(w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	(w).Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	(w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

// 處理所有的todo相關請求
func handleTodos(w http.ResponseWriter, r *http.Request) {
	// 啟用 CORS
	enableCors(w)

	// 處理 OPTIONS 請求（預檢請求）
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	switch r.Method {
	case "GET":
		// 返回所有todos
		w.Header().Set("Content-Type", "application/json")
		if todos == nil {
			json.NewEncoder(w).Encode([]Todo{})
			return
		}
		json.NewEncoder(w).Encode(todos)

	case "POST":
		// 新增todo
		var todo Todo
		json.NewDecoder(r.Body).Decode(&todo)
		todos = append(todos, todo)
		json.NewEncoder(w).Encode(todo)

	case "PUT":
		// 更新todo
		var updatedTodo Todo
		json.NewDecoder(r.Body).Decode(&updatedTodo)

		for i, todo := range todos {
			if todo.ID == updatedTodo.ID {
				todos[i] = updatedTodo
				json.NewEncoder(w).Encode(updatedTodo)
				return
			}
		}
		http.Error(w, "Todo not found", http.StatusNotFound)

	case "DELETE":
		// 從URL取得ID
		id := r.URL.Query().Get("id")
		if id == "" {
			http.Error(w, "ID is required", http.StatusBadRequest)
			return
		}

		for i, todo := range todos {
			if todo.ID == id {
				todos = append(todos[:i], todos[i+1:]...)
				w.WriteHeader(http.StatusOK)
				return
			}
		}
		http.Error(w, "Todo not found", http.StatusNotFound)

	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func main() {
	// 註冊處理函數
	http.HandleFunc("/todos", handleTodos)

	// 啟動服務器
	fmt.Println("Starting server at port 8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}

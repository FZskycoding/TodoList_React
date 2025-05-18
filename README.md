# Todo List 全端應用

使用 React 和 Go 構建的待辦事項清單應用程式。前端使用 React 進行開發，後端使用 Go 提供 RESTful API 服務。

## 功能特點

- 新增待辦事項
- 編輯待辦事項
- 刪除待辦事項
- 標記完成/未完成
- RESTful API
- 跨域資源共享 (CORS) 支援

## 技術棧

### 前端
- React
- Axios（HTTP 請求）
- CSS（樣式設計）

### 後端
- Go
- net/http（HTTP 服務器）

## 安裝和運行

### 前端設置
```bash
# 進入前端目錄
cd frontend

# 安裝依賴
npm install

# 啟動開發服務器
npm start
```
前端將在 http://localhost:3000 運行

### 後端設置
```bash
# 進入後端目錄
cd backend

# 運行後端服務器
go run main.go
```
後端 API 將在 http://localhost:8080 運行

## API 文檔

### 獲取所有待辦事項
- 方法：GET
- 端點：`/todos`
- 響應：待辦事項陣列

### 創建待辦事項
- 方法：POST
- 端點：`/todos`
- 請求體：待辦事項對象
```json
{
    "id": "string",
    "taskName": "string",
    "completed": false,
    "isEditing": false
}
```

### 更新待辦事項
- 方法：PUT
- 端點：`/todos`
- 請求體：更新的待辦事項對象

### 刪除待辦事項
- 方法：DELETE
- 端點：`/todos?id={id}`
- 參數：待辦事項 ID


# React Todo List 專案

這是一個使用 React 開發的待辦事項清單應用程式，提供了基本的待辦事項管理功能。

## 功能特色

- ✏️ 新增待辦事項
- ✅ 標記完成/未完成狀態
- 🗑️ 刪除待辦事項
- 📝 編輯待辦事項內容

## 專案結構

```
src/
├── components/
│   ├── Todo.js            # 單一待辦事項組件
│   ├── TodoForm.js        # 新增待辦事項表單
│   ├── EditTodoForm.js    # 編輯待辦事項表單
│   └── TodoWrapper.js     # 待辦事項列表容器
├── App.js                 # 應用程式主組件
└── index.js              # 應用程式入口點
```

## 主要組件說明

### TodoWrapper
- 管理待辦事項的狀態
- 處理新增、刪除、編輯和完成狀態切換等操作

### TodoForm
- 提供新增待辦事項的表單介面
- 處理表單提交和輸入值的狀態管理

### Todo
- 顯示單一待辦事項
- 提供完成狀態切換和刪除功能的按鈕

### EditTodoForm
- 提供編輯待辦事項的表單介面
- 處理編輯狀態的切換和更新

## 使用技術

- React.js
- JavaScript (ES6+)
- CSS
- Font Awesome（圖示）

## 如何開始

1. 複製專案到本地：
   ```bash
   git clone [your-repository-url]
   ```

2. 安裝相依套件：
   ```bash
   npm install
   ```

3. 啟動開發伺服器：
   ```bash
   npm start
   ```

4. 開啟瀏覽器並訪問：
   ```
   http://localhost:3000
   ```

## 學習重點

此專案展示了以下 React 概念的實際應用：

- 組件之間的資料傳遞（Props）
- 狀態管理（useState Hook）
- 事件處理
- 條件渲染
- 列表渲染
- 表單處理



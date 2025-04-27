# 💰 Expense Tracker

A full-stack expense tracker application built using **React (Frontend)** and **Node.js + Express (Backend)**. It allows users to record, edit, delete, and visualize their expenses, providing insights into their spending patterns.

## 📁 Project Structure

ExpenseTracker/ ├── backend/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ └── server.js └── frontend/ ├── public/ └── src/



---

## 🚀 Backend (Node.js + Express)

### 🔌 Server
- Runs on: `http://localhost:5000`
- Located at: `backend/server.js`

### 📦 Routes

#### 1. **POST /api/expenses**
- **Purpose:** Add a new expense.
- **Request Body:**
  ```json
  {
    "amount": 50,
    "category": "Food",
    "description": "Lunch",
    "date": "2023-04-27T14:30:00Z"
  }
Response:
```json
{ "message": "Expense added successfully!" }

### 2. **GET /api/expenses**
- **Purpose:** Retrieve all expenses.
- **Response:**
```json
[
  {
    "id": "1",
    "amount": 50,
    "category": "Food",
    "description": "Lunch",
    "date": "2023-04-27T14:30:00Z"
  },
 
]
Response:
```json
{ "message": "Expense updated successfully!" }




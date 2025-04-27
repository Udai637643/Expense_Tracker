# 💰 Expense Tracker

A full-stack expense tracker application built using **React (Frontend)** and **Node.js + Express (Backend)**. It allows users to record, edit, delete, and visualize their expenses, providing insights into their spending patterns.

## 📁 Project Structure

ExpenseTracker/ ├── backend/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ └── server.js └── frontend/ ├── public/ └── src/

yaml
Copy
Edit

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

json
Copy
Edit
{ "message": "Expense added successfully!" }
2. PUT /api/expenses/:id
Purpose: Update an existing expense.

Request Body:

json
Copy
Edit
{
  "amount": 60,
  "category": "Food",
  "description": "Dinner",
  "date": "2023-04-27T18:30:00Z"
}
Response:

json
Copy
Edit
{ "message": "Expense updated successfully!" }
3. DELETE /api/expenses/:id
Purpose: Delete an expense.

Response:

json
Copy
Edit
{ "message": "Expense deleted successfully!" }
🎨 Frontend (React + Tailwind CSS)
📦 Pages
1. Home Page (/)
Displays a list of all expenses.

Each expense shows: amount, category, description, date, and options to edit or delete.

2. Add Expense Page (/add)
A form to add a new expense with fields for amount, category, description, and date.

3. Dashboard Page (/dashboard)
Displays charts (e.g., pie chart for category distribution, bar chart for monthly expenses).

📦 Components
ExpenseCard: Displays individual expense details and handles edit/delete.

AddExpenseForm: Form for adding new expenses.

Header: Navigation bar with links to Home, Add Expense, and Dashboard.

🧠 Hooks
useExpenses.js: Custom hook for managing expense data and interactions with the backend.

useChartData.js: Custom hook for generating data required for the visualizations.

💻 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/Udai637643/ExpenseTracker.git
cd ExpenseTracker
2. Install backend dependencies
bash
Copy
Edit
cd backend
npm install
3. Install frontend dependencies
bash
Copy
Edit
cd ../frontend
npm install
4. Run the apps
Start Backend
bash
Copy
Edit
cd ../backend
node server.js
Start Frontend
bash
Copy
Edit
cd ../frontend
npm start
📄 .gitignore (Sample)
gitignore
Copy
Edit
# Ignore node_modules
frontend/node_modules/
backend/node_modules/

# Ignore env and build
.env
frontend/build/
backend/dist/
✅ Features
Add, edit, and delete expense records.

View expenses in a list and visualize data via charts.

Responsive and user-friendly interface built with React and Tailwind CSS.

Backend API to manage expense data (Node.js + Express).

MongoDB for storing expenses.

ScreenShots



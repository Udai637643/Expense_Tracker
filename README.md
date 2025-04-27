
# 💰 Expense Tracker

A full-stack expense tracker application built using **React (Frontend)** and **Node.js + Express (Backend)**. It allows users to securely record, edit, delete, and visualize their expenses, providing insights into their spending patterns.

Authentication is handled using **JWT (JSON Web Tokens)** to protect API routes.

---

## 🚀 Backend (Node.js + Express + JWT)

### 🔌 Server
- **Runs on:** `http://localhost:5000`
- **Located at:** `backend/server.js`

### 🔐 Authentication

#### 1. **POST /api/auth/register**
- **Purpose:** Register a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  { "token": "jwt_token_here" }
  ```

#### 2. **POST /api/auth/login**
- **Purpose:** Login an existing user.
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  { "token": "jwt_token_here" }
  ```

🔒 After login or registration, the **JWT token** must be included in the headers for protected routes:

```http
Authorization: Bearer <your_token_here>
```

---

### 📦 Routes

#### 1. **POST /api/expenses**
- **Purpose:** Add a new expense (**Protected**).
- **Headers:** Authorization token required.
- **Request Body:**
  ```json
  {
    "amount": 50,
    "category": "Food",
    "description": "Lunch",
    "date": "2023-04-27T14:30:00Z"
  }
  ```
- **Response:**
  ```json
  { "message": "Expense added successfully!" }
  ```

#### 2. **GET /api/expenses**
- **Purpose:** Retrieve all expenses (**Protected**).
- **Headers:** Authorization token required.
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
    ...
  ]
  ```

#### 3. **PUT /api/expenses/:id**
- **Purpose:** Update an existing expense (**Protected**).
- **Headers:** Authorization token required.
- **Request Body:**
  ```json
  {
    "amount": 60,
    "category": "Food",
    "description": "Dinner",
    "date": "2023-04-27T18:30:00Z"
  }
  ```
- **Response:**
  ```json
  { "message": "Expense updated successfully!" }
  ```

#### 4. **DELETE /api/expenses/:id**
- **Purpose:** Delete an expense (**Protected**).
- **Headers:** Authorization token required.
- **Response:**
  ```json
  { "message": "Expense deleted successfully!" }
  ```

---

## 🎨 Frontend (React + Tailwind CSS)

### 📦 Pages

#### 1. **Home Page (`/`)**
- Displays a list of all expenses.
- Each expense shows: amount, category, description, date, and options to edit or delete.
- User must be authenticated (JWT stored locally).

#### 2. **Add Expense Page (`/add`)**
- A form to add a new expense with fields for amount, category, description, and date.
- User must be authenticated.

#### 3. **Dashboard Page (`/dashboard`)**
- Displays charts (e.g., pie chart for category distribution, bar chart for monthly expenses).
- User must be authenticated.

#### 4. **Login Page (`/login`)**
- Allows existing users to log in and receive a JWT.

#### 5. **Register Page (`/register`)**
- Allows new users to create an account and receive a JWT.

### 📦 Components

- **ExpenseCard:** Displays individual expense details and handles edit/delete.
- **AddExpenseForm:** Form for adding new expenses.
- **Header:** Navigation bar with links to Home, Add Expense, Dashboard, Login, Register.
- **PrivateRoute:** Protects routes from unauthorized access.

### 🧠 Hooks

- **useExpenses.js:** Custom hook for managing expense data and interactions with the backend.
- **useAuth.js:** Custom hook for managing login, logout, and JWT storage.
- **useChartData.js:** Custom hook for generating data required for the visualizations.

---

## 💻 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Udai637643/ExpenseTracker.git
cd ExpenseTracker
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### 4. Setup environment variables

In `backend/.env`, add:

```env
JWT_SECRET=your_jwt_secret_key
MONGO_URI=your_mongodb_connection_string
PORT=5000
```


### 5. Run the apps

#### Start Backend
```bash
cd ../backend
npm run dev
```
(uses nodemon)

#### Start Frontend
```bash
cd ../frontend
npm start
```

---

## 📄 .gitignore (Sample)

```gitignore
# Ignore node_modules
frontend/node_modules/
backend/node_modules/

# Ignore env and build
.env
frontend/build/
backend/dist/
```

---

## ✅ Features

- JWT Authentication (register/login users).
- Add, edit, and delete expense records (only after authentication).
- View expenses in a list and visualize data via charts.
- Secure API endpoints with JWT validation middleware.
- Responsive and user-friendly interface built with React and Tailwind CSS.
- Backend API to manage expense data (Node.js + Express).
- MongoDB for storing expenses securely.

---

## 📸 ScreenShots

![Expense List](https://github.com/user-attachments/assets/expense-list.png)
![Dashboard](https://github.com/user-attachments/assets/dashboard.png)

---

## 👨‍💻 Author

Udai Lal Regar  
[LicdnkedIn](https://linkedin.com/in/udai-lal-regar-144806240) | [GitHub](https://github.com/udai637643)
```
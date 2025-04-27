//import { useState } from 'react';
import API from '../api';

function ExpenseList({ expenses, setEditingExpense, fetchExpenses }) {
  const handleDelete = async (id) => {
    try {
      await API.delete(`/expenses/${id}`);
      fetchExpenses();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Your Expenses</h2>
      {expenses.map((expense) => (
        <div key={expense._id} className="flex justify-between items-center mb-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <div>
            <p className="font-semibold text-white">₹{expense.amount} - {expense.title}</p>
            <p className="text-sm text-gray-400">{expense.description}</p>
            <p className="text-sm text-gray-500">{new Date(expense.date).toLocaleDateString()}</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setEditingExpense(expense)} 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
            >
              Edit
            </button>
            <button 
              onClick={() => handleDelete(expense._id)} 
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;

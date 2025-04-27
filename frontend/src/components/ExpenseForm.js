import { useState, useEffect } from 'react';
import API from '../api';

function ExpenseForm({ fetchExpenses, editingExpense, setEditingExpense }) {
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const titleOptions = [
    'Food',
    'Travel',
    'Shopping',
    'Entertainment',
    'Health',
    'Utilities',
    'Other',
  ];

  useEffect(() => {
    if (editingExpense) {
      setAmount(editingExpense.amount);
      setTitle(editingExpense.title);
      setDescription(editingExpense.description || '');
      setDate(editingExpense.date ? editingExpense.date.split('T')[0] : '');
    }
  }, [editingExpense]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const expenseData = {
        title: title.trim(),
        amount: parseFloat(amount),
        description: description.trim(),
        date,
      };

      if (editingExpense) {
        await API.put(`/expenses/${editingExpense._id}`, expenseData);
        setEditingExpense(null);
      } else {
        await API.post('/expenses', expenseData);
      }

      setAmount('');
      setTitle('');
      setDescription('');
      setDate('');
      fetchExpenses();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-2xl shadow-2xl mb-6">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-white tracking-wide">
        {editingExpense ? 'Edit Expense' : 'Add Expense'}
      </h2>

      <input 
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border-2 border-gray-700 bg-gray-800 text-white p-3 w-full mb-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />

      <select
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-2 border-gray-700 bg-gray-800 text-white p-3 w-full mb-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      >
        <option value="">Select Expense Title</option>
        {titleOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <input 
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border-2 border-gray-700 bg-gray-800 text-white p-3 w-full mb-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <input 
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border-2 border-gray-700 bg-gray-800 text-white p-3 w-full mb-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        style={{ color: '#ffffff' }}
        required
      />

      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold py-3 rounded-xl w-full transition-all duration-300 tracking-wide"
      >
        {editingExpense ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
}

export default ExpenseForm;

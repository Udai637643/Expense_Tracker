import { useEffect, useState } from 'react';
import API from '../api';
import Navbar from '../components/Navbar';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import Dashboard from '../components/Dashboard';

function HomePage() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  const fetchExpenses = async () => {
    try {
      const res = await API.get('/expenses');
      setExpenses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 min-h-screen">
    
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="max-w-4xl mx-auto p-4 space-y-4">
        <ExpenseForm fetchExpenses={fetchExpenses} editingExpense={editingExpense} setEditingExpense={setEditingExpense} />
        <ExpenseList expenses={expenses} setEditingExpense={setEditingExpense} fetchExpenses={fetchExpenses} />
        <Dashboard expenses={expenses} />
      </div>
    </div>
  );
}

export default HomePage;

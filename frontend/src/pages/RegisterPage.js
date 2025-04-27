import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', { name, email, password });
      navigate('/');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl w-80">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-white tracking-wide">
          Register
        </h2>

        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-700 bg-gray-800 text-white p-3 w-full mb-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-700 bg-gray-800 text-white p-3 w-full mb-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-700 bg-gray-800 text-white p-3 w-full mb-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold py-3 rounded-xl w-full transition-all duration-300 tracking-wide"
        >
          Register
        </button>

        <p className="text-center mt-6 text-sm text-gray-300">
          Already have an account?{' '}
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      alert('Login failed!');
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl w-80">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-white tracking-wide">
          Login
        </h2>

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
          Login
        </button>

        <p className="text-center mt-6 text-sm text-gray-300">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;

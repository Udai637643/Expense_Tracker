import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900  text-white p-5 flex justify-between items-center shadow-md rounded-b-2xl">
      <Link 
        to="/home" 
        className="text-2xl font-extrabold tracking-wide hover:text-gray-300 transition-all duration-300"
      >
        Expense Tracker
      </Link>
      <button 
        onClick={handleLogout} 
        className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 text-white font-semibold px-5 py-2 rounded-xl transition-all duration-300 shadow-md"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;

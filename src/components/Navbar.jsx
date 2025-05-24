import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { FaRegCompass } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="absolute bottom-0 left-0 w-full bg-white border-t flex justify-around py-2">
      <Link to="/" className={`flex flex-col items-center text-sm ${location.pathname === '/' ? 'text-blue-500' : 'text-gray-500'}`}>
        <AiFillHome size={24} />
        Home
      </Link>
      <Link to="/explore" className={`flex flex-col items-center text-sm ${location.pathname === '/explore' ? 'text-blue-500' : 'text-gray-500'}`}>
        <FaRegCompass size={24} />
        Explore
      </Link>
      <Link to="/profile" className={`flex flex-col items-center text-sm ${location.pathname === '/profile' ? 'text-blue-500' : 'text-gray-500'}`}>
        <AiOutlineUser size={24} />
        Profile
      </Link>
    </nav>
  );
}

export default Navbar;
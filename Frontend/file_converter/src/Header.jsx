// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    alert('Logout successfully');
  };

  return (
    <header className="bg-blue-500 p-6">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          File Converter
        </Link>
        {/* Show links for screens larger than or equal to 768px (tablet and above) */}
        <div className="hidden lg:flex lg:items-center space-x-4">
          <Link to="/signup" className="text-white hover:underline text-2xl">
            Sign Up
          </Link>
          <Link to="/" className="text-white hover:underline text-2xl">
            Login
          </Link>
          <Link to="/convert-file" className="text-white hover:underline text-2xl">
            Convert File
          </Link>
          {/* <Link to="/logout" className="text-white hover:underline text-2xl">
            Log Out
          </Link> */}
          <LogOut onLogout={handleLogout} />
        </div>
        {/* Show menu icon for screens less than 768px (tablet and below) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Dropdown menu for smaller screens */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 right-0 bg-white mt-2 p-2 space-y-2">
              <Link to="/signup" className="text-blue-500 hover:underline block text-2xl">
                Sign Up
              </Link>
              <Link to="/" className="text-blue-500 hover:underline block text-2xl">
                Login
              </Link>
              <Link to="/convert-file" className="text-blue-500 hover:underline block text-2xl">
                Convert File
              </Link>
              {/* <Link to="/logout" className="text-blue-500 hover:underline block text-2xl">
                Log Out
              </Link> */}
              <LogOut onLogout={handleLogout}>Log out</LogOut>
              
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

// export default Header;
// Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import LogOut from './LogOut';

// const Header = () => {
//   // Dummy logout function, replace with your actual logout logic
//   const handleLogout = () => {
//     alert('Logout logic goes here');
//   };

//   return (
//     <header className="bg-blue-500 p-4">
//       <nav className="container mx-auto flex items-center justify-between">
//         <Link to="/" className="text-white text-xl font-bold">
//           Your App Name
//         </Link>

//         <div className="lg:flex lg:items-center space-x-4">
//           <Link to="/signup" className="text-white hover:underline">
//             Sign Up
//           </Link>
//           <Link to="/login" className="text-white hover:underline">
//             Login
//           </Link>
//           <Link to="/convert-file" className="text-white hover:underline">
//             Convert File
//           </Link>
//           {/* Use the LogoutButton component for the "Log Out" action */}
//           <LogOut onLogout={handleLogout} />
//         </div>
//       </nav>
//     </header>
//   );
// };

export default Header;

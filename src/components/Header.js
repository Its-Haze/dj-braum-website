import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <h1 className="text-2xl font-semibold tracking-wide">Dj Braum</h1>
          <img src="/images/dj-braum-icon.png" alt="Dj Braum Logo" className="w-10 h-10" />
        </a>
        <nav className="flex space-x-6">
          <a href="#home" className="hover:text-purple-300 transition duration-300">Home</a>
          <a href="#about" className="hover:text-purple-300 transition duration-300">About</a>
          <a href="#features" className="hover:text-purple-300 transition duration-300">Features</a>
        </nav>
        <div>
          <a href="https://top.gg/bot/939307188072116305" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Vote</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

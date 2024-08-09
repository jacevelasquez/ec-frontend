import React from "react";

function Header() {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-gray-500 text-white p-0 shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            <a href="#home" className="hover:text-gray-300">
              John Carlo Velasquez
            </a>
          </div>

          <div className="space-x-2">
            <a href="#section1" className="hover:bg-blue-700 px-4 py-2 rounded">
              Home
            </a>
            <a href="#section2" className="hover:bg-blue-700 px-4 py-2 rounded">
              Experience
            </a>
            <a href="#section3" className="hover:bg-blue-700 px-4 py-2 rounded">
              Projects
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

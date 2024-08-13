import React from "react";
import { Link  } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <section id="section3"
        className="h-screen bg-gray-100 flex items-center justify-center p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <a
            href="/component1"
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src="https://raw.githubusercontent.com/jacevelasquez/ec-frontend/master/public/genshin-logo.png"
              alt="Component 1"
              className="w-full h-80 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Genshin Impact Character Filter</h3>
              <p className="text-lg text-gray-700">
                An application that can filter, search and sort data. The data is queried to MongoDB Database.
              </p>
            </div>
          </a>
          <Link
            to="/pokedex"
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src="https://raw.githubusercontent.com/jacevelasquez/ec-frontend/master/public/pokedex-logo.png"
              alt="Component 2"
              className="w-full h-80 object-contain bg-white"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Mini-Pokedex</h3>
              <p className="text-lg text-gray-700">
                An application that can search about Pokemon bio, types and abilities. The data is integrated from PokeAPI.
              </p>
            </div>
          </Link>

          <a
            className="bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col relative cursor-not-allowed opacity-50"
            aria-disabled="true"
          >
            <img
              src="https://raw.githubusercontent.com/jacevelasquez/ec-frontend/master/public/expense-logo.png"
              alt="Component 3"
              className="w-full h-80 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Expense Management System</h3>
              <p className="text-lg text-gray-700">
                A simple CRUD application using Express and MongoDB that can compute and checks your expenses.
              </p>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">Coming Soon</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;

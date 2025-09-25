import React from 'react';
import { AlertCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
        Rail Route API Tester
      </h1>
      <p className="text-lg text-gray-500">
        Frontend for calculating railroad metrics using the Nest.js backend.
      </p>
      <div className="mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-800 text-sm font-medium flex items-start justify-center">
        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
        <span>
          Ensure your Nest.js API is running on{" "}
          <code className="font-mono bg-indigo-200 px-1 py-0.5 rounded text-indigo-900">
            http://localhost:3000
          </code>{" "}
          to use this application.
        </span>
      </div>
    </header>
  );
};

export default Header;
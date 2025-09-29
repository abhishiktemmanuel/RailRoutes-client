import React from 'react';
import { AlertCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
        Rail Route
      </h1>
      <p className="text-lg text-gray-500">
        Calculating railroad metrics using the Nest.js backend.
      </p> 
    </header>
  );
};

export default Header;
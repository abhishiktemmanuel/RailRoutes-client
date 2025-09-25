import React from 'react';
import { RefreshCcw, Search } from 'lucide-react';

const LoadingButton = ({ 
  loading, 
  onClick, 
  disabled, 
  loadingText = "Calculating...", 
  defaultText = "Calculate Route" 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full bg-indigo-600 text-white py-2.5 px-4 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {loading ? (
        <>
          <RefreshCcw className="w-4 h-4 mr-2 animate-spin" />
          {loadingText}
        </>
      ) : (
        <>
          <Search className="w-4 h-4 mr-2" />
          {defaultText}
        </>
      )}
    </button>
  );
};

export default LoadingButton;
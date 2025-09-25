import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, RefreshCcw } from 'lucide-react';
import ResultDisplay from './ResultDisplay';

const InputCard = ({
  title,
  icon: Icon,
  onSubmit,
  children,
  result,
  error,
  loading,
  submitButtonText = "Calculate Route"
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl">
      <div
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <Icon className="w-5 h-5 mr-3 text-indigo-600" />
          {title}
        </h2>
        <button className="text-gray-500 hover:text-indigo-600 transition">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className={`${isExpanded ? "block" : "hidden"} space-y-4`}>
        {children}
        
        <button
          onClick={onSubmit}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2.5 px-4 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <>
              <RefreshCcw className="w-4 h-4 mr-2 animate-spin" />
              Calculating...
            </>
          ) : (
            <>
              <Search className="w-4 h-4 mr-2" />
              {submitButtonText}
            </>
          )}
        </button>

        <ResultDisplay result={result} error={error} />
      </div>
    </div>
  );
};

export default InputCard;
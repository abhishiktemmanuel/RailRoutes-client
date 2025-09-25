import React from 'react';

const ResultDisplay = ({ result, error }) => {
  if (!result && !error) return null;

  const hasError = !!error;
  const displayText = error || result;

  return (
    <div
      className={`mt-4 p-4 rounded-lg font-mono text-lg transition duration-300 ${
        hasError
          ? "bg-red-100 text-red-700 border border-red-300"
          : "bg-green-100 text-green-700 border border-green-300"
      }`}
    >
      <p className="font-medium text-gray-600 mb-1">Result:</p>
      <p className="font-bold text-2xl">{displayText}</p>
    </div>
  );
};

export default ResultDisplay;
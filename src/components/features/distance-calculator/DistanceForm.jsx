import React from 'react';

const DistanceForm = ({ value, onChange }) => {
  return (
    <>
      <label
        htmlFor="distance-input"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Enter Route (e.g., A-B-C-D)
      </label>
      <input
        id="distance-input"
        type="text"
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="A-D-C"
      />
    </>
  );
};

export default DistanceForm;
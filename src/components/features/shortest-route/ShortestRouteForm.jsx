import React from 'react';

const ShortestRouteForm = ({ startValue, onStartChange, endValue, onEndChange }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="shortest-start"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Start Station
        </label>
        <input
          id="shortest-start"
          type="text"
          value={startValue}
          onChange={onStartChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="A"
          maxLength={1}
        />
      </div>
      <div>
        <label
          htmlFor="shortest-end"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          End Station
        </label>
        <input
          id="shortest-end"
          type="text"
          value={endValue}
          onChange={onEndChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="C"
          maxLength={1}
        />
      </div>
    </div>
  );
};

export default ShortestRouteForm;
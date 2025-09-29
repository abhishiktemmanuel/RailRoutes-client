import React from 'react';

const TripsWithExactStopsForm = ({ formData, onInputChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="exact-stops-start"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Start Station
        </label>
        <input
          id="exact-stops-start"
          type="text"
          value={formData.start}
          onChange={(e) => onInputChange('start', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="A"
          maxLength={1}
        />
      </div>

      <div>
        <label
          htmlFor="exact-stops-end"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          End Station
        </label>
        <input
          id="exact-stops-end"
          type="text"
          value={formData.end}
          onChange={(e) => onInputChange('end', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="C"
          maxLength={1}
        />
      </div>

      <div>
        <label
          htmlFor="exact-stops"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Exact Stops
        </label>
        <input
          id="exact-stops"
          type="number"
          value={formData.exactStops}
          onChange={(e) => onInputChange('exactStops', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="4"
          min="0"
        />
      </div>
    </div>
  );
};

export default TripsWithExactStopsForm;
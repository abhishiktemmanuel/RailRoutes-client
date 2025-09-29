import React from 'react';

const TripsWithMaxStopsForm = ({ formData, onInputChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="max-stops-start"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Start Station
        </label>
        <input
          id="max-stops-start"
          type="text"
          value={formData.start}
          onChange={(e) => onInputChange('start', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="C"
          maxLength={1}
        />
      </div>

      <div>
        <label
          htmlFor="max-stops-end"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          End Station
        </label>
        <input
          id="max-stops-end"
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
          htmlFor="max-stops"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Maximum Stops
        </label>
        <input
          id="max-stops"
          type="number"
          value={formData.maxStops}
          onChange={(e) => onInputChange('maxStops', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="3"
          min="0"
        />
      </div>
    </div>
  );
};

export default TripsWithMaxStopsForm;
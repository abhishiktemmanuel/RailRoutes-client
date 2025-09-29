import React from 'react';

const TripsWithMaxDistanceForm = ({ formData, onInputChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="max-distance-start"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Start Station
        </label>
        <input
          id="max-distance-start"
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
          htmlFor="max-distance-end"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          End Station
        </label>
        <input
          id="max-distance-end"
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
          htmlFor="max-distance"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Maximum Distance
        </label>
        <input
          id="max-distance"
          type="number"
          value={formData.maxDistance}
          onChange={(e) => onInputChange('maxDistance', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="30"
          min="1"
        />
      </div>
    </div>
  );
};

export default TripsWithMaxDistanceForm;
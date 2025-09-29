import React, { useState } from 'react';
import { Route } from 'lucide-react';
import InputCard from '../../ui/InputCard';
import TripsWithExactStopsForm from './TripsWithExactStopsForm';
import { useApi } from '../../../hooks/useApi';
import { railRouteApi } from '../../../services/api';

const TripsWithExactStopsCalculator = () => {
  const [formData, setFormData] = useState({
    start: 'A',
    end: 'C',
    exactStops: '4'
  });
  const { loading, error, data, execute } = useApi();

  const handleSubmit = async () => {
    const { start, end, exactStops } = formData;

    if (!start.trim() || !end.trim()) {
      execute(() => Promise.reject(new Error("Please enter both start and end stations")));
      return;
    }

    const exactStopsNum = parseInt(exactStops);
    if (isNaN(exactStopsNum) || exactStopsNum < 0) {
      execute(() => Promise.reject(new Error("Please enter a valid number of stops")));
      return;
    }

    try {
      await execute(railRouteApi.getTripsWithExactStops, start.trim().toUpperCase(), end.trim().toUpperCase(), exactStopsNum);
    } catch (err) {
      // Error is handled by the useApi hook
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <InputCard
      title="Trips with Exact Stops"
      icon={Route}
      onSubmit={handleSubmit}
      result={data?.count !== undefined ? `Number of trips: ${data.count}` : undefined}
      error={error}
      loading={loading}
    >
      <TripsWithExactStopsForm 
        formData={formData}
        onInputChange={handleInputChange}
      />
    </InputCard>
  );
};

export default TripsWithExactStopsCalculator;
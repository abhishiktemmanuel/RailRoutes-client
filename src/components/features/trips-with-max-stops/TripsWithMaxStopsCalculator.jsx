import React, { useState } from 'react';
import { Route } from 'lucide-react';
import InputCard from '../../ui/InputCard';
import TripsWithMaxStopsForm from './TripsWithMaxStopsForm';
import { useApi } from '../../../hooks/useApi';
import { railRouteApi } from '../../../services/api';

const TripsWithMaxStopsCalculator = () => {
  const [formData, setFormData] = useState({
    start: 'C',
    end: 'C',
    maxStops: '3'
  });
  const { loading, error, data, execute } = useApi();

  const handleSubmit = async () => {
    const { start, end, maxStops } = formData;

    if (!start.trim() || !end.trim()) {
      execute(() => Promise.reject(new Error("Please enter both start and end stations")));
      return;
    }

    const maxStopsNum = parseInt(maxStops);
    if (isNaN(maxStopsNum) || maxStopsNum < 0) {
      execute(() => Promise.reject(new Error("Please enter a valid number of stops")));
      return;
    }

    try {
      await execute(railRouteApi.getTripsWithMaxStops, start.trim().toUpperCase(), end.trim().toUpperCase(), maxStopsNum);
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
      title="Trips with Maximum Stops"
      icon={Route}
      onSubmit={handleSubmit}
      result={data?.count !== undefined ? `Number of trips: ${data.count}` : undefined}
      error={error}
      loading={loading}
    >
      <TripsWithMaxStopsForm 
        formData={formData}
        onInputChange={handleInputChange}
      />
    </InputCard>
  );
};

export default TripsWithMaxStopsCalculator;
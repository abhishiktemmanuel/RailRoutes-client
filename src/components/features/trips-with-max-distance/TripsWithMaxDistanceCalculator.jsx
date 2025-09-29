import React, { useState } from 'react';
import { Route } from 'lucide-react';
import InputCard from '../../ui/InputCard';
import TripsWithMaxDistanceForm from './TripsWithMaxDistanceForm';
import { useApi } from '../../../hooks/useApi';
import { railRouteApi } from '../../../services/api';

const TripsWithMaxDistanceCalculator = () => {
  const [formData, setFormData] = useState({
    start: 'C',
    end: 'C',
    maxDistance: '30'
  });
  const { loading, error, data, execute } = useApi();

  const handleSubmit = async () => {
    const { start, end, maxDistance } = formData;

    if (!start.trim() || !end.trim()) {
      execute(() => Promise.reject(new Error("Please enter both start and end stations")));
      return;
    }

    const maxDistanceNum = parseInt(maxDistance);
    if (isNaN(maxDistanceNum) || maxDistanceNum <= 0) {
      execute(() => Promise.reject(new Error("Please enter a valid distance greater than 0")));
      return;
    }

    try {
      await execute(railRouteApi.getTripsWithMaxDistance, start.trim().toUpperCase(), end.trim().toUpperCase(), maxDistanceNum);
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
      title="Trips with Maximum Distance"
      icon={Route}
      onSubmit={handleSubmit}
      result={data?.count !== undefined ? `Number of trips: ${data.count}` : undefined}
      error={error}
      loading={loading}
    >
      <TripsWithMaxDistanceForm 
        formData={formData}
        onInputChange={handleInputChange}
      />
    </InputCard>
  );
};

export default TripsWithMaxDistanceCalculator;
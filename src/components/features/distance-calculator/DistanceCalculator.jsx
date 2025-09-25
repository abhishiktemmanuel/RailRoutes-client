import React, { useState } from 'react';
import { Route } from 'lucide-react';
import InputCard from '../../ui/InputCard';
import DistanceForm from './DistanceForm';
import { useApi } from '../../../hooks/useApi';
import { railRouteApi } from '../../../services/api';

const DistanceCalculator = () => {
  const [routeInput, setRouteInput] = useState('A-B-C');
  const { loading, error, data, execute } = useApi();

  const handleSubmit = async () => {
    const stations = routeInput
      .toUpperCase()
      .split("-")
      .filter(s => s.trim() !== "");

    if (stations.length < 2) {
      execute(() => Promise.reject(new Error("Please enter at least two stations (e.g., A-B)")));
      return;
    }

    try {
      await execute(railRouteApi.getRouteDistance, stations);
    } catch (err) {
      // Error is handled by the useApi hook
    }
  };

  return (
    <InputCard
      title="Route Distance Calculator"
      icon={Route}
      onSubmit={handleSubmit}
      result={data?.distance}
      error={error}
      loading={loading}
    >
      <DistanceForm 
        value={routeInput} 
        onChange={(e) => setRouteInput(e.target.value)} 
      />
    </InputCard>
  );
};

export default DistanceCalculator;
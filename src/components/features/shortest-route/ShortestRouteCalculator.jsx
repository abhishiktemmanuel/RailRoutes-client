import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import InputCard from '../../ui/InputCard';
import ShortestRouteForm from './ShortestRouteForm';
import { useApi } from '../../../hooks/useApi';
import { railRouteApi } from '../../../services/api';

const ShortestRouteCalculator = () => {
  const [startStation, setStartStation] = useState('A');
  const [endStation, setEndStation] = useState('C');
  const { loading, error, data, execute } = useApi();

  const handleSubmit = async () => {
    if (!startStation || !endStation) {
      execute(() => Promise.reject(new Error("Start and End stations are required.")));
      return;
    }

    try {
      await execute(
        railRouteApi.getShortestDistance, 
        startStation.toUpperCase(), 
        endStation.toUpperCase()
      );
    } catch (err) {
      // Error is handled by the useApi hook
    }
  };

  return (
    <InputCard
      title="Shortest Route Finder"
      icon={TrendingUp}
      onSubmit={handleSubmit}
      result={data?.distance}
      error={error}
      loading={loading}
      submitButtonText="Find Shortest Route"
    >
      <ShortestRouteForm
        startValue={startStation}
        onStartChange={(e) => setStartStation(e.target.value)}
        endValue={endStation}
        onEndChange={(e) => setEndStation(e.target.value)}
      />
    </InputCard>
  );
};

export default ShortestRouteCalculator;
"use client";
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DistanceCalculator from "../components/features/distance-calculator/DistanceCalculator";
import ShortestRouteCalculator from "../components/features/shortest-route/ShortestRouteCalculator";
import TripsWithMaxStopsCalculator from "@/components/features/trips-with-max-stops/TripsWithMaxStopsCalculator";
import TripsWithExactStopsCalculator from "@/components/features/trips-with-exact-stops/TripsWithExactStopsCalculator";
import TripsWithMaxDistanceCalculator from "@/components/features/trips-with-max-distance/TripsWithMaxDistanceCalculator";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-inter antialiased">
      <style>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        input[type="text"] {
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        input[type="text"]:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);
        }
      `}</style>

      <Header />

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DistanceCalculator />
        <ShortestRouteCalculator />
        <TripsWithMaxStopsCalculator />
        {/* <TripsWithExactStopsCalculator /> */}
        <TripsWithMaxDistanceCalculator />
      </div>

      <Footer />
    </div>
  );
};

export default App;

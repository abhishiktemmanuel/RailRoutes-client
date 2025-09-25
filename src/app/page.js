"use client";
import React from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import RouteDistanceCalculator from "./components/features/routeDistance/RouteDistanceCalculator";
import ShortestRouteFinder from "./components/features/shortestRoute/ShortestRouteFinder";
import "./styles/globals.css";
import "./styles/components.css";

const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="container">
          <div className="grid">
            <RouteDistanceCalculator />
            <ShortestRouteFinder />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;

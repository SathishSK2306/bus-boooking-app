// src/pages/BusTracking/BusTracking.jsx
import React, { useEffect, useState } from "react";
import "./BusTracking.css";

const locations = [
  "Majestic",
  "Malleshwaram",
  "Yeshwanthpur",
  "Peenya",
  "Nagasandra",
  "Rajajinagar",
  "whitefield",
  "electronic city",
];
const totalStops = locations.length;

const BusTracking = () => {
  const [currentStop, setCurrentStop] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStop((prev) => (prev + 1) % totalStops);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tracking-container">
      <h2>Bus Journey Progress</h2>
      <div className="route-line">
        {locations.map((loc, index) => (
          <div key={index} className="stop-container">
            <div
              className={`stop-dot ${index === currentStop ? "active" : ""}`}
            >
              {index === currentStop && (
                <img
                  src="/images/bus-icon.png"
                  alt="Bus"
                  className="bus-icon"
                />
              )}
            </div>
            <div className="stop-label">{loc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusTracking;

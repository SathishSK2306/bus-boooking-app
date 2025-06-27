// src/components/BusCard/BusCard.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BusCard.css";

const BusCard = ({ bus }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBookNow = () => {
    navigate("/booking", { state: { bus } });
  };

  return (
    <div className={`bus-card ${isExpanded ? "expanded" : ""}`}>
      <div className="bus-info">
        <div className="bus-name">
          <h3>{bus.name}</h3>
          <span className="operator">{bus.operator}</span>
        </div>

        <div className="timing">
          <div className="departure">
            <span className="time">{bus.departure}</span>
            <span className="location">{bus.from || "City A"}</span>
          </div>

          <div className="duration">
            <div className="duration-line"></div>
            <span>{bus.duration}</span>
          </div>

          <div className="arrival">
            <span className="time">{bus.arrival}</span>
            <span className="location">{bus.to || "City B"}</span>
          </div>
        </div>

        <div className="price">
          <span className="amount">${bus.price}</span>
          <span className="per-person">per person</span>
        </div>

        <div className="actions">
          <button className="btn btn-details" onClick={toggleExpand}>
            {isExpanded ? "Hide Details" : "View Details"}
          </button>
          <button className="btn btn-primary" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="bus-details">
          <div className="amenities">
            <h4>Amenities:</h4>
            <ul>
              {bus.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>

          <div className="seats-info">
            <h4>Available Seats: {bus.seats}</h4>
            <p>Boarding Point: Central Bus Station</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusCard;

import React from "react";
import BusCard from "../BusCard/BusCard";
import "./BusList.css";

const BusList = ({ searchParams }) => {
  // Mock data - in a real app, this would come from an API
  const buses = [
    {
      id: 1,
      name: "Express Deluxe",
      departure: "08:00 AM",
      arrival: "02:30 PM",
      duration: "6h 30m",
      price: 45,
      seats: 40,
      amenities: ["AC", "WiFi", "Charging", "Toilet"],
      operator: "GreenLine",
    },
    {
      id: 2,
      name: "Comfort Travel",
      departure: "10:15 AM",
      arrival: "04:45 PM",
      duration: "6h 30m",
      price: 38,
      seats: 36,
      amenities: ["AC", "Toilet"],
      operator: "BlueStar",
    },
    {
      id: 3,
      name: "Premium Coach",
      departure: "11:30 AM",
      arrival: "06:00 PM",
      duration: "6h 30m",
      price: 55,
      seats: 30,
      amenities: ["AC", "WiFi", "Charging", "Toilet", "Recliner"],
      operator: "GoldLine",
    },
  ];

  return (
    <div className="bus-list">
      <div className="search-info">
        <h3>
          {searchParams.from} to {searchParams.to} • {searchParams.date} •{" "}
          {searchParams.passengers}{" "}
          {searchParams.passengers > 1 ? "passengers" : "passenger"}
        </h3>
      </div>

      {buses.map((bus) => (
        <BusCard key={bus.id} bus={bus} />
      ))}
    </div>
  );
};

export default BusList;

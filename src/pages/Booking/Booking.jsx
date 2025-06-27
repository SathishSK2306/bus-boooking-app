import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SeatSelection from "../../components/SeatSelection/SeatSelection";
import Modal from "../../components/Modal/Modal";
import "./Booking.css";

const Booking = () => {
  const location = useLocation();
  const bus = location.state?.bus;

  if (!bus) {
    return (
      <div className="booking-error">
        No bus selected. Please return to Home.
      </div>
    );
  }

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="booking">
      <h1>Booking for {bus.name}</h1>
      <SeatSelection
        selectedSeats={selectedSeats}
        onSeatSelect={setSelectedSeats}
      />
      {/* Add payment & confirm UI here */}
    </div>
  );
};

export default Booking;

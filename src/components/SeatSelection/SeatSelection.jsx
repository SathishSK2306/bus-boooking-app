import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SeatSelection.css";

const seatLayout = [
  ["", "", "", "", "", "Driver"],
  [],
  ["1A", "1B", "", "1C", "1D", "1E"],
  ["2A", "2B", "", "2C", "2D", "2E"],
  ["3A", "3B", "", "3C", "3D", "3E"],
  ["4A", "4B", "", "4C", "4D", "4E"],
  ["5A", "5B", "", "5C", "5D", "5E"],
  ["6A", "6B", "", "6C", "6D", "6E"],
  ["7A", "7B", "", "7C", "7D", "7E"],
  ["8A", "8B", "", "8C", "8D", "8E"],
];

const soldSeats = ["2B", "3C", "5D"];
const ladiesSeats = ["1A", "1B", "6D"];

const SeatSelection = ({ selectedSeats, onSeatSelect }) => {
  const [seats, setSeats] = useState(selectedSeats);
  const [passengerInfo, setPassengerInfo] = useState({});
  const [returnTicket, setReturnTicket] = useState(false);
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (seat) => {
    if (soldSeats.includes(seat)) return;
    let updated = [...seats];
    if (updated.includes(seat)) {
      updated = updated.filter((s) => s !== seat);
      const updatedInfo = { ...passengerInfo };
      delete updatedInfo[seat];
      setPassengerInfo(updatedInfo);
    } else {
      updated.push(seat);
      setPassengerInfo({ ...passengerInfo, [seat]: { name: "", age: "" } });
    }
    setSeats(updated);
    onSeatSelect(updated);
  };

  const handleInfoChange = (seat, field, value) => {
    setPassengerInfo({
      ...passengerInfo,
      [seat]: {
        ...passengerInfo[seat],
        [field]: value,
      },
    });
  };

  return (
    <div className="seats">
      <div className="seat-legend">
        <div className="seat-label available">Available</div>
        <div className="seat-label selected">Selected</div>
        <div className="seat-label sold">Sold</div>
        <div className="seat-label ladies">Ladies</div>
      </div>

      <div className="bus-layout">
        {seatLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((seat, index) =>
              seat ? (
                <div
                  key={seat}
                  className={`seat
                    ${soldSeats.includes(seat) ? "sold" : ""}
                    ${ladiesSeats.includes(seat) ? "ladies" : ""}
                    ${seats.includes(seat) ? "selected" : ""}`}
                  onClick={() => handleSelect(seat)}
                >
                  {seat}
                </div>
              ) : (
                <div key={index} className="aisle" />
              )
            )}
          </div>
        ))}
      </div>

      {seats.length > 0 && (
        <div className="passenger-details-section">
          <h3>Passenger Details</h3>
          {seats.map((seat) => (
            <div key={seat} className="passenger-form">
              <input
                type="text"
                placeholder={`Name for seat ${seat}`}
                value={passengerInfo[seat]?.name || ""}
                onChange={(e) => handleInfoChange(seat, "name", e.target.value)}
              />
              <input
                type="number"
                placeholder="Age"
                value={passengerInfo[seat]?.age || ""}
                onChange={(e) => handleInfoChange(seat, "age", e.target.value)}
              />
              <select
                value={passengerInfo[seat]?.gender || ""}
                onChange={(e) =>
                  handleInfoChange(seat, "gender", e.target.value)
                }
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          ))}

          <div className="return-ticket">
            <label>
              <input
                type="checkbox"
                checked={returnTicket}
                onChange={(e) => setReturnTicket(e.target.checked)}
              />
              <span> </span>Add return ticket
            </label>
          </div>

          <button className="btn-booking" onClick={() => setShowPayment(true)}>
            Book Ticket Now
          </button>
        </div>
      )}

      {showPayment && (
        <div className="payment-section">
          <h3>Payment & Contact Info</h3>
          <input
            type="email"
            placeholder="Enter Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="WhatsApp Number"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <p className="note">
            *Ticket copy will be sent to your Email and WhatsApp.
          </p>
          <button
            className="btn-confirm"
            onClick={() => navigate("/bustracking")}
          >
            Confirm & Pay
          </button>
        </div>
      )}
      <br />
      <br />
    </div>
  );
};

export default SeatSelection;

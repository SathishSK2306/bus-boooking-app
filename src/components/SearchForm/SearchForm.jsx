import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  const swapLocations = () => {
    setFormData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          name="from"
          value={formData.from}
          onChange={handleChange}
          placeholder="Departure city"
          required
        />
      </div>

      <button type="button" className="swap-btn" onClick={swapLocations}>
        ⇄
      </button>

      <div className="form-group">
        <label htmlFor="to">To</label>
        <input
          type="text"
          id="to"
          name="to"
          value={formData.to}
          onChange={handleChange}
          placeholder="Destination city"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="passengers">Passengers</label>
        <input
          type="number"
          id="passengers"
          name="passengers"
          min="1"
          max="10"
          value={formData.passengers}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary search-btn">
        Search Buses
      </button>
    </form>
  );
};

export default SearchForm;

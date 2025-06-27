import React, { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import BusList from "../../components/BusList/BusList";
import "./Home.css";

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
  });
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (params) => {
    setSearchParams(params);
    setShowResults(true);
    // Scroll to results section
    setTimeout(() => {
      const resultsSection = document.getElementById("bus-results");
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Book Bus Tickets Online</h1>
          <p>Find and book bus tickets for your next trip</p>
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>

      {showResults && (
        <section id="bus-results" className="bus-results fade-in">
          <div className="container">
            <h2 className="section-title">Available Buses</h2>
            <BusList searchParams={searchParams} />
          </div>
        </section>
      )}

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚌</div>
              <h3>Wide Selection</h3>
              <p>Choose from hundreds of bus operators across the country</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>We guarantee the best prices for your bus tickets</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Booking</h3>
              <p>Your information is always safe with us</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Easy Booking</h3>
              <p>Simple and intuitive booking process</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About YesGoBus</h1>
          <p>Your trusted partner for comfortable and affordable bus travel</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, YesGoBus began with a simple mission: to make
                bus travel more accessible, comfortable, and convenient for
                everyone. What started as a small team of travel enthusiasts has
                grown into a leading bus ticket booking platform serving
                thousands of customers daily.
              </p>
              <p>
                We partner with the most reliable bus operators across the
                country to bring you a wide selection of routes, comfortable
                buses, and competitive prices.
              </p>
            </div>
            <div className="about-image">
              <img src="/public/images/bus-img.png" alt="Our buses" />
            </div>
          </div>

          <div className="mission-vision">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To revolutionize bus travel by providing seamless booking
                experiences, exceptional customer service, and innovative travel
                solutions.
              </p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To become the most trusted and customer-centric bus travel
                platform in the region, connecting people and places with
                comfort and reliability.
              </p>
            </div>
          </div>

          <div className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="/public/images/team1.jpeg" alt="Team member" />
                </div>
                <h4>John Doe</h4>
                <p>Founder & CEO</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/public/images/team2.jpeg" alt="Team member" />
                </div>
                <h4>Jane Smith</h4>
                <p>Operator</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/public/images/team3.jpeg" alt="Team member" />
                </div>
                <h4>Mike Johnson</h4>
                <p>Customer Support Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

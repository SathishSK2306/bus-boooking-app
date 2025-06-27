import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    feedback: "",
    rating: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRating = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(true);
    // Here you would typically send the data to your backend
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      feedback: "",
      rating: 0,
    });
    setHoverRating(0);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our services or need help with your
                booking? Our team is here to assist you.
              </p>

              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>123 Bus Street, Bangalore, PN : 560021</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+1 234 567 890</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@YesGoBus.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>How was your experience with us?</label>
                  <select
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                  >
                    <option value="">Select feedback type</option>
                    <option value="Average">Average</option>
                    <option value="Good">Good</option>
                    <option value="Awesome">Awesome</option>
                    <option value="Bad">Bad</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Rating</label>
                  <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`fas fa-star ${
                          star <= (hoverRating || formData.rating)
                            ? "active"
                            : ""
                        }`}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => handleRating(star)}
                      ></i>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="contact-confirmation">
          <div className="confirmation-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2>Thank You!</h2>
          <p>Your message has been successfully sent.</p>
          <p>We'll get back to you as soon as possible.</p>
          <button className="btn btn-primary" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;

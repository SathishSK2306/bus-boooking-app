import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ isLogin, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    mobile: "",
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData.email, formData.password);
    } else {
      console.log("Registering:", formData);
    }
    onClose();
  };

  return (
    <div className="auth-modal-backdrop">
      <div className="auth-modal">
        <button className="auth-close" onClick={onClose}>
          ×
        </button>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
              <select
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="tel"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
                required
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            required
          />

          {!isLogin && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={(e) => handleChange("otp", e.target.value)}
              required
            />
          )}

          <button type="submit" className="auth-submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;

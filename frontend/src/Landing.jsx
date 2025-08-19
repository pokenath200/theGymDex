
import React, { useState } from "react";
import "./App.css";

function Landing() {
  const [postcode, setPostcode] = useState("");

  const handlePostcodeChange = (e) => setPostcode(e.target.value);
  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search logic
    alert(`Searching for gyms in: ${postcode}`);
  };

  return (
    <div className="landing-hero-bg">
      <div className="landing-overlay">
        <nav className="landing-nav">
          <div className="nav-logo">The GymDex</div>
          <div className="nav-links">
            <button className="nav-btn">Log In</button>
            <button className="nav-btn">Gym Owner Portal</button>
          </div>
        </nav>
        <main className="landing-hero-content">
          <h1 className="hero-title">Discover Gyms Across Northern Ireland</h1>
          <p className="hero-subtitle">Find the perfect gym, compare facilities, join discussions, and explore the fitness community. Your journey starts here.</p>
          <form className="postcode-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter your postcode..."
              value={postcode}
              onChange={handlePostcodeChange}
              className="postcode-hero-input"
            />
            <button type="submit" className="postcode-hero-btn">Get Started</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Landing;

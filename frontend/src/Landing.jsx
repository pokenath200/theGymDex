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
    <div className="landing-container">
      <header className="landing-header">
        <h1 className="app-title">the gymdex</h1>
        <p className="subtitle">Find, compare, and connect with gyms near you</p>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter postcode or area..."
            value={postcode}
            onChange={handlePostcodeChange}
            className="postcode-input"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
      </header>
      <section className="features-section">
        <div className="feature-card">
          <h2>Interactive Map & List</h2>
          <p>Explore gyms by map or list, filter by location, opening hours, equipment, and more.</p>
        </div>
        <div className="feature-card">
          <h2>Detailed Gym Listings</h2>
          <p>See opening hours, equipment, classes, deals, rates, and join discussions for each gym.</p>
        </div>
        <div className="feature-card">
          <h2>Marketplace</h2>
          <p>Buy and sell 2nd hand equipment and supplements in a secure marketplace.</p>
        </div>
        <div className="feature-card">
          <h2>Personalized Experience</h2>
          <p>Save favourites, get event notifications, and rate gyms.</p>
        </div>
      </section>
      <footer className="landing-footer">
        <button className="login-btn">Log In</button>
        <button className="owner-btn">Gym Owner Portal</button>
      </footer>
    </div>
  );
}

export default Landing;

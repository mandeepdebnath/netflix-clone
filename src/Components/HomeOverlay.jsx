import React from "react";
import "../styles/homeOverlay.css";

function HomeOverlay() {
  return (
    <div>
      <div className="overlay__content">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime</h3>
        <button className="modal__button">Browse</button>
      </div>
    </div>
  );
}

export default HomeOverlay;

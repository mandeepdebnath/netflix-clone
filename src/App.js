import React, { useState } from "react";
import Row from "./Components/Row";
import "./App.css";
import requests from "./API/request";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
// import HomeOverlay from "./Components/HomeOverlay";
import "./styles/homeOverlay.css";
import Modal from "react-modal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const openModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <div className="app">
      <Modal isOpen={modalIsOpen} className="overlay">
        <div className="overlay__content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime</h3>
          <button className="modal__button" onClick={openModal}>
            Browse
          </button>
        </div>
      </Modal>
      {/* navbar */}
      <Navbar />
      {/* banner */}
      <Banner />

      {/* fetching the URL for the desired title to get the movies data */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> */}
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Banner />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;

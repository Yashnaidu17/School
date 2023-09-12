import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      {/* Other components (About Us, Academics, Gallery, Contact Us) go here */}
    </div>
  );
}
export default App;

import React from 'react';

function Navbar() {
  return (
    <header>
      <nav>
        <div className="container">
          <h1><a href="#">Campion School</a></h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

import React from 'react';

function HomePage() {
  return (
    <section id="home">
      <div className="container">
        <h2>Welcome to CAMPION SCHOOL</h2>
        <p>Campion School, Bhopal is a private Catholic primary and secondary school for boys located in Bhopal, in the state of Madhya Pradesh, India. The school was founded by the Jesuits in July 1965 and is one of the oldest schools in Bhopal.</p>

        <div className="announcements">
          {/* Announcements cards go here */}
        </div>
      </div>
    </section>
  );
}

export default HomePage;

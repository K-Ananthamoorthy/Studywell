import React from 'react';
import './App.css'; // Import main styles
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
    </div>
  );
}

export default App;

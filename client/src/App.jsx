import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

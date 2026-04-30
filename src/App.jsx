import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import ScienceReport from "./components/ScienceReport";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReportPreview from "./components/ReportPreview";
import Support from './components/Support';

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <About />
      {/* <Features /> */}
      <Benefits />
      <Support />
      <ScienceReport />
      <ReportPreview />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

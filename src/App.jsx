// import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

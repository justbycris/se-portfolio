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
    {/*----Nav Menu----*/}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App;

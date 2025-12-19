// import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
// import CustomCursor from "../assets/blob.svg";

function App() {
  return (
    <>
     <style>
        {`
          /* Apply custom cursor globally and for all states */
          html, body {
            cursor: url('./assets/blob.svg'), auto;
          }
        `}
      </style>
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

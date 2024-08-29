// import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './components/Header';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    <Section title={"Personal Projects"} description={"Here are some of the latest projects I've recently completed."}/>
    <ProjectCard />
    </>
  )
}

export default App;

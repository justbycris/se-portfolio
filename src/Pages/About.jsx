import React from 'react';
import Header from '../components/Header' ;
import Text from '../components/Text';
import Experience from '../components/Experience';
import nebulaImg from '../assets/NebulaProject-Logo.png';
import NRlogo from '../assets/NR-logo.png';
import Persadologo from '../assets/persado_logo.jpg';
import pursuitLogo from '../assets/pursuit-logo-.png';
import Footer from '../components/Footer';

export default function About() {
  return ( 
    <div>
        <Header/>
        <Text header="About" copy="
I'm a designer and frontend developer with 6+ years of experience at the intersection of visual storytelling, brand design, and web development. My work spans email campaigns, landing pages, digital assets, and e-commerce, bringing together a rare combination of design craft, photography, and hands-on code (HTML, CSS, JavaScript, SFMC) to build experiences that are both beautiful and measurable. I've led large-scale A/B testing initiatives for Fortune 500 clients, translated Figma designs into accessible interfaces, and grown subscriber bases of nearly 800K always with an eye for the details that move people to take action.
        
What sets me apart is the breadth of what I can do independently: concept, shoot, design, build, and optimize, without losing the thread of a brand. I'm equally comfortable in Adobe Creative Suite and a code editor, and I bring a bilingual (English/Spanish) perspective that adds depth to how I approach creative problems. I'm currently open to new opportunities where design, development, and storytelling meet. "/>
        <div className="flex flex-col justify-center max-w-xl m-auto px-3 pt-20 pb-5">
        <h2 className="text-bold text-2xl font-custom py-0.5 font-medium text-slate-800 mb-8">Experience</h2>
            <Experience logo={Persadologo} alt="Persado company logo." company="Persado" role="Frontend Software Engineer | Service Delivery" start="February 2025" end="Present" />  
            <Experience logo={NRlogo} alt="NR Magazine logo graphic." company="NR Magazine" role="Designer & Web Developer" start="November 2020" end="January 2025" />
            <Experience logo={pursuitLogo} alt="Pursuit logo graphic." company="Pursuit" role="Digital Designer" start="November 2019" end="May 2020" />
        </div>
    {/*----Footer----*/}
    <Footer/>
    </div>
  )
}

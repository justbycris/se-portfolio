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
        <Text header="About" copy="I'm a Designer and Software Engineer passionate about creating visually captivating and functional designs. I adapt quickly to new tools and trends, ensuring my work is industry-leading. My project management skills and teamwork enable high-quality results on tight deadlines. I excel in dynamic environments, creating user experiences that meet and exceed client expectations."/>
        <div className="flex flex-col justify-center max-w-xl m-auto px-3 pt-20 pb-5">
        <h2 className="text-bold text-2xl font-custom py-0.5 font-medium text-slate-800 mb-8">Experience</h2>
            <Experience logo={Persadologo} alt="Persado company logo." company="Persado" role="Front End Engineer | Service Delivery" start="February 2025" end="Present" />  
            <Experience logo={NRlogo} alt="NR Magazine logo graphic." company="NR Magazine" role="Graphic Designer & Web Developer" start="November 2020" end="January 2025" />
            <Experience logo={pursuitLogo} alt="Pursuit logo graphic." company="Pursuit" role="Digital Designer" start="November 2019" end="May 2020" />
        </div>
    {/*----Footer----*/}
    <Footer/>
    </div>
  )
}

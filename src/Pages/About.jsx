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
        <Text header="About" copy="I'm currently a Solutions Software Engineer at Persado, working at the intersection of engineering and customer success. I love solving technical challenges for enterprise customers, building tools that improve workflows, and creating documentation that empowers developers. I believe the best products come from deep customer empathy and continuous iteration."/>
        <div className="flex flex-col justify-center max-w-xl m-auto px-3 pt-20 pb-5">
        <h2 className="text-bold text-2xl font-custom py-0.5 font-medium text-slate-800 mb-8">Experience</h2>
            <Experience logo={Persadologo} alt="Persado company logo." company="Persado" role="Software Engineer | Service Delivery" start="February 2025" end="Present" />  
            <Experience logo={NRlogo} alt="NR Magazine logo graphic." company="NR Magazine" role="Designer & Web Developer" start="November 2020" end="January 2025" />
            <Experience logo={pursuitLogo} alt="Pursuit logo graphic." company="Pursuit" role="Digital Designer" start="November 2019" end="May 2020" />
        </div>
    {/*----Footer----*/}
    <Footer/>
    </div>
  )
}

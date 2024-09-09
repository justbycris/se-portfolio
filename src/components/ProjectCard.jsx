import React from 'react'
import sliceStreet from '../assets/SliceStreet_Project_Screenshot.jpg';
import nlsSignup from '../assets/Nls-Signup-Frontend.jpg';
import nebulaProject from '../assets/NP-Frontend-Page.jpg';
import faqsProject from '../assets/FAQs-project-screenshot.jpg';
import { Link } from 'react-router-dom';


export default function ProjectCard() {

  return (
    <div>
        <div className="flex flex-row justify-center w-full m-auto px-3 py-0 md: flex-wrap">
        <Card 
          projectLink={"https://nebulaproject.netlify.app/#section1"}
          photoName={nebulaProject}
          photoText= {"Nebula project landing page."}
          name="Nebula Project"
          description="Fun landing page for a freelance creative agency."
          stack="UI design | HTML | CSS | JavaScript | Git | Netlify"
          />
          <Card 
          projectLink={"https://newsletter-signup-frontend.netlify.app/"}
          photoName={nlsSignup}
          photoText= {"Newsletter signup window screenshot. "}
          name="Newsletter Sign Up page"
          description="Desgined & developed a responsive newsletter sign up page.  "
          stack="UI design | Adobe XS | HTML | CSS | JavaScript | Sailthru "
          />
          <Card 
          projectLink={"https://slice-street-pizza.netlify.app/"}
          photoName={sliceStreet}
          photoText= {"Screenshot of Slice Street website project."}
          name="Slice Stree Pizza"
          description="React web app project for a fun pizza restaurant. "
          stack="UI design | HTML | CSS | React | Netlify"
          />
          <Card 
          projectLink={"https://faq-accordion-challenge.netlify.app/"}
          photoName={faqsProject}
          photoText= {"Screenshot of FAQs project from FrontEnd Mentor."}
          name="FAQs Accordion"
          description="Frontend Mentor challenge project of a FAQs page.  "
          stack="UI design | HTML | CSS | JavaScript"
          />
        </div>
    </div>
  )
}


function Card({projectLink, photoName, photoText, name, description, stack}) {
  
  return (
    /* ---- CARD COMPONENT -----*/
    <div className="flex flex-col justify-center max-w-lg m-4 p-6 bg-gray-200 bg-opacity-50 rounded-2xl box-border hover:bg-opacity-80 cursor-pointer " >
      <Link to={projectLink}>
        <img src={photoName} alt={photoText} className="my-4 shadow-md rounded-2xl"/> 
        <h1 className="text-bold text-xl font-custom py-0.5 font-medium text-slate-800">{name}</h1>
        <p className="text-md font-extra font-neutral text-slate-600 mb-3">{description}</p>
        <span className="text-md font-extra font-neutral text-slate-500">{stack}</span>
      </Link>
        
    </div>


  )
 
}

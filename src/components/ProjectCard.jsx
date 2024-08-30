import React from 'react'
import sliceStreet from '../assets/SliceStreet_Project_Screenshot.jpg'

export default function ProjectCard() {

  return (
    <div>
        <div className="flex flex-row justify-center w-full m-auto px-3 py-0 md: flex-wrap">
          <Card 
          photoName={sliceStreet}
          photoText= {"Screenshot of Slice Street website project."}
          name="Slice Stree Pizza"
          description="React web app project for a fun pizza restaurant. "
          stack="UI design | HTML | CSS | React"
          />
          <Card 
          photoName={sliceStreet}
          photoText= {"Screenshot of Slice Street website project."}
          name="Slice Stree Pizza"
          description="React web app project for a fun pizza restaurant. "
          stack="UI design | HTML | CSS | React"
          />
          <Card 
          photoName={sliceStreet}
          photoText= {"Screenshot of Slice Street website project."}
          name="Slice Stree Pizza"
          description="React web app project for a fun pizza restaurant. "
          stack="UI design | HTML | CSS | React"
          />
          <Card 
          photoName={sliceStreet}
          photoText= {"Screenshot of Slice Street website project."}
          name="Slice Stree Pizza"
          description="React web app project for a fun pizza restaurant. "
          stack="UI design | HTML | CSS | React"
          />
        </div>
    </div>
  )
}


function Card({photoName, photoText, name, description, stack}) {
  
  return (
    /* ---- CARD COMPONENT -----*/
    <div className="flex flex-col justify-center max-w-lg mx-2 my-4 px-6 py-4 bg-gray-200 bg-opacity-50 rounded-2xl box-border hover:bg-opacity-80 cursor-pointer " >
        <img src={photoName} alt={photoText} className="my-4 shadow-md rounded-2xl"/> 
        <h1 className="text-bold text-xl font-custom py-0.5 font-medium text-slate-800">{name}</h1>
        <p className="text-md font-extra font-neutral text-slate-700">{description}</p>
        <span className="text-md font-extra font-neutral text-slate-500">{stack}</span>
    </div>



  )
 
}

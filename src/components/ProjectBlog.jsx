import React from 'react'
import { Link, useParams } from 'react-router-dom';


export default function ProjectBlog({ title, image, firstDescription, secondImage, secondDescription, subtitle, thirdImage, fixScreenshot, fixScreenshot2, fixDescription, secondSubtitle }) {

 

  return (
    <div>
      <div className=" max-w-2xl mx-auto p-8">
       <h1 className="font-medium py-4 font-extra text-lg text-slate-600">{title}</h1>
       
       <img src={image} alt={`Image of project: ${title}`} className="pt-2 pb-6 my-8" />
       <p className="font-extra text-md text-slate-600">{firstDescription}</p>
       
       <div className="flex flex-row my-8 bg-gray-300 rounded-md">
        <img src={secondImage} alt={`Image 2 of project: ${title}`} className="block size-2/4 py-6  mx-auto p-1"/>
        {/* <img src={thirdImage} alt={`Image 3 of project: ${title}`} className="block size-1/3 py-6  mx-auto p-1"/> */}
       </div>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" >{secondDescription}</p>
      
       <h2 className="font-medium py-4 font-extra text-lg text-slate-600 mt-8 mb-4">{subtitle}</h2>
       <div className="flex flex-row mb-8 bg-gray-300 rounded-md">
        <img src={fixScreenshot} alt={`Image 4 of project: ${title}`} className="block size-2/4 py-6  mx-auto p-1"/>
        {/* <img src={fixScreenshot2} alt={`Image 5 of project: ${title}`} className="block size-1/3 py-6  mx-auto p-1"/> */}
       </div>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" >{fixDescription}</p>
      
       <h3 className="font-medium py-4 font-extra text-md text-slate-600 mt-8 mb-4">{secondSubtitle}</h3>
       <div className="flex flex-row mb-8 bg-gray-300 rounded-md">
        <img src={fixScreenshot} alt={`Image 4 of project: ${title}`} className="block size-2/4 py-6  mx-auto p-1"/>
        <img src={fixScreenshot2} alt={`Image 5 of project: ${title}`} className="block size-1/3 py-6  mx-auto p-1"/>
       </div>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" >{fixDescription}</p>
      </div>

    </div>
  )
}

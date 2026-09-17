import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import ProjectBlog from '../../components/ProjectBlog.jsx';
import { Link } from "react-router-dom";
import kindredGif from '/src/assets/kindred.gif'
import kindredDashboard from '/src/assets/Kindred-Original-Dasboard.jpg'
import kindredScreenshot from '/src/assets/kindred-original.jpg'
import kindredActiveScreenshot from '/src/assets/Kindred-Original-Dasboard_Variants.jpg'
import kindredScreenshot2 from '/src/assets/kindred-original-active.jpg'
import kindredScreenshot3 from '/src/assets/kindred-original-active-mobile.png'
import fixScreenshot1 from '/src/assets/Kindred-Fix-Dasboard_2.jpg' 
import fixScreenshot3 from '/src/assets/kindred-fix-screenshot-active.jpg' 
import mobileDashboardOriginal from '/src/assets/Mobile-Kindred-Original-Dasboard.jpg' 
import mobileDashboardFix from '/src/assets/Mobile-Kindred-fIx-Dasboard.jpg' 

export default function Kindred() {
  return (
    <div>
  
      <Header/>
          {/* <ProjectBlog 
          title="Kindred" 
          image={kindredGif} 
          firstDescription="Kindred is a redesign project from Kindred's website. 
          The goal of this project was to create a more intuitive and visually 
          appealing search form that improves the user search experience. 
          The redesign focused on improving the user experience, enhancing 
          the visual design, and creating a more cohesive brand identity." 
          secondImage={kindredScreenshot}
          secondDescription="The original form composition and alignment was blocking the intuitivity of the form, making it difficult for users to understand within the first seconds of use how to navigate. Part of this unbalance is attributed to the line element at the top that can be easily interpreted as an input. And the close button ('X') is aligned on the left, mbreaking the visual alignment of the form. 
          
          While these details seem small, they can have a significant impact on the user experience and can lead to frustration and confusion for users. "
          subtitle="The Fix"
          thirdImage={kindredScreenshot2}
          fixScreenshot={fixScreenshot1}
          fixScreenshot2={fixScreenshot2}
          fixDescription="I've found that sometimes to fix something doesn't mean to add more things but rather remove them. To keep things simple. I started by removing the top line element, that was creating confusion and making the form look cluttered. I also moved the close button to the right side of the form, which is a more intuitive placement for users. This change helps to create a more balanced and visually appealing design, while also improving the overall user experience." 
          
          /> */}
          <div className=" max-w-2xl mx-auto p-8">
       <h1 className="font-medium py-4 font-extra text-lg text-slate-600">Kindred</h1>
       
       <img src={kindredGif} alt={`Image of project: `} className="pt-2 pb-6 my-8" loading="lazy"/>
       <p className="font-extra text-md text-slate-600">Kindred is a redesign project for Kindred's website. 
        The goal of this project was to create a more intuitive and visually appealing search form that 
        improves the user search experience. The redesign focused on improving intuitiveness, enhancing 
        the visual design, and creating a more cohesive brand identity within the search component.</p>
       
       <div className="flex flex-row my-8 rounded-md">
        
        <img src={kindredActiveScreenshot} alt={`Image 3 of project: `} className="block size-4/4 py-6  mx-auto p-1" loading="lazy"/>
       </div>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" >
        
The original form composition and alignment were blocking the intuitiveness of the form, 
making it difficult for users to understand within the first few seconds of use how to navigate.  
       <br></br> <br></br> Part of this imbalance is attributed to the line element at the top that can be 
       easily interpreted as an input. And the close button ('X') is aligned to the left, breaking the visual 
       alignment of the form. While these details seem small, they can have a significant impact on the user 
       experience and can lead to frustration and confusion for users.
        <br></br><br></br> 
         In the component's active state, there were add-on elements that were also misaligned, 
         creating a visual imbalance and making it difficult for users to understand the hierarchy 
         and relationship of the elements.
        <div className="flex flex-row mb-8  rounded-md my-6">

        <img src={kindredDashboard} alt='Image with the original Kindred search form and sketched notes about the improvements mentioned above. By Cristi Name.' className="block size-4/4 py-6  mx-auto p-1" loading="lazy" />
        </div>

       
        </p>
        
       
      
       <h2 className="font-medium py-4 font-extra text-lg text-slate-600 mt-8 mb-4">The Fix</h2>
       <div className="flex flex-row mb-8  rounded-md">
        <img src={fixScreenshot1} alt={`Image 4 of project: `} className="block size-4/4 py-6  mx-auto p-1"/>
        
       </div>
       <blockquote className="font-extra text-2xl font-light text-center mb-8">
        I've learned that sometimes fixing something doesn't mean to add more, 
        but rather to remove and keep things simple.</blockquote>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" > 
        I started by removing the top line element that was creating confusion and making the form 
        look cluttered. I also moved the close button to the right side of the form, which is a more
         intuitive placement for users. This change helps to create a more balanced and visually appealing 
         design, while also improving the overall user experience.</p>
      
       <h3 className="font-medium py-4 font-extra text-md text-slate-600 mt-8 mb-4">Mobile Version</h3>
       <div className="flex flex-col mb-8  rounded-md">
        <img src={mobileDashboardOriginal} alt={`Image 4 of project: `} className="block size-4/4 py-6  mx-auto p-1"/>
        <img src={mobileDashboardFix} alt={`Image 5 of project: `} className="block size-4/4 py-6  mx-auto p-1"/>
       </div>
       <p className="font-extra text-md text-slate-600 whitespace-pre-line" ></p>
      </div>
      <Footer/>
    </div>
  )
}
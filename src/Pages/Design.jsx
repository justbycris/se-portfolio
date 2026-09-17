import { React, useState, useEffect } from 'react'
import Text from '../components/Text'
import Header from '../components/Header';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer'
import Button from '../components/Button'
import CustomCursor from "../assets/blob.svg";

export default function Home() {

  const [loading, setLoading] = useState(true)
  
  //Simulate loading for skeleton effect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
     
      <Header />
     
    {loading ? (
    //SKELETON EFFECT
      <div className="animate-pulse box-border flex flex-col justify-center w-full ">
        <div className="max-w-xl m-auto px-3 pt-20 pb-2 w-full">
            <div className="h-10 bg-gray-200 rounded w-64 mx-0 mb-3 py-0.5"></div>
            <div className="h-14 bg-gray-200 rounded w-11/12 mx-0 mb-6 "></div>
            <div className="h-24 bg-gray-200 rounded w-11/12 mx-0 mb-6"></div>
            <div className="h-12 bg-gray-200 rounded w-64 mx-0 mb-4"></div>
            <div className="mt-20 h-9 bg-gray-200 rounded w-64 mx-0 mb-3 py-0.5"></div>
            <div className="h-8 bg-gray-200 rounded w-11/12 mx-0 mb-6 "></div>
            <div>
            </div>
        </div>
                <div className="flex flex-col md:flex-row lg:flex-row flex-wrap box-border justify-center gap-2 md:gap-12  my-auto w-full px-10 ">
                  <div className="h-96 bg-gray-200 rounded w-full md:w-4/12 mb-6"></div>
                  <div className="h-96 bg-gray-200 rounded w-full md:w-4/12 mb-6"></div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row flex-wrap box-border justify-center gap-2 md:gap-8  my-auto w-full px-10 ">
                  <div className="h-96 bg-gray-200 rounded w-full md:w-4/12 mb-6"></div>
                  <div className="h-96 bg-gray-200 rounded w-full md:w-4/12 mb-6"></div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row flex-wrap box-border justify-center gap-2 md:gap-8  my-auto w-full px-10 ">
                  <div className="h-96 bg-gray-200 rounded w-full md:w-4/12 mb-6"></div>
                  
                </div>
               
      <Footer/>
      </div>
  ) : (
  // What goes here?
  <div>

      
      {/*----Footer----*/}
      <Footer/>
      </div>
  )}
        
    </div>
  )
}



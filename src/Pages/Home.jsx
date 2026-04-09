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
<<<<<<< HEAD
        <Text 
    header={"Hola! I'm Cristi." } 
    subtitle={"I design things, then build them. Frontend engineer with a designer's eye. Currently at Persado, building email at scale."}
    copy={"My approach to code and life is led by curiosity. I believe that learning continuously and sharing knowledge openly are how we build truly impactful products, systems, relationships, and experiences."}
    />
    <Button buttonLink="/about" label="Learn More"></Button>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 w-1/4 mx-auto"></hr>
    {/*----Personal Projects----*/}
    <Section title={"Personal Projects"} description={"Here are some of the latest projects I've recently completed."}/>
    <ProjectCard />
    {/*----Footer----*/}
    <Footer/>
=======
     
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
  
  <Text 
      header={"Hola! I'm Cristi." } 
      subtitle={"Designer & Software Engineer from Veracruz, Mexico based in NYC."}
      copy={"My approach to code and life is led by curiosity. I believe that learning continuously and sharing knowledge openly are how we build truly impactful products, systems, relationships, and experiences."}
      />
      <Button buttonLink="/about" label="Learn More"></Button>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 w-1/4 mx-auto"></hr>
      {/*----Personal Projects----*/}
      <Section title={"Personal Projects"} description={"Here are some of the latest projects I've recently completed."}/>
      <ProjectCard />
      {/*----Footer----*/}
      <Footer/>
      </div>
  )}
        
>>>>>>> cb87a25a8931dc8f787a8e719c81e4300ca03cb5
    </div>
  )
}



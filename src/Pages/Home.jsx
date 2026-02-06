import React from 'react'
import Text from '../components/Text'
import Header from '../components/Header';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer'
import Button from '../components/Button'
import CustomCursor from "../assets/blob.svg";

export default function Home() {
  return (
    <div>
      <Header />
        <Text 
    header={"Hola! I'm Cristi." } 
    subtitle={"Designer & software engineer from Veracruz, Mexico based in NYC."}
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
  )
}



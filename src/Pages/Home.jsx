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
    copy={"I'm passionate about crafting visually captivating and functional designs. I adapt quickly to new tools and trends, delivering high quality designs and web applications."}
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



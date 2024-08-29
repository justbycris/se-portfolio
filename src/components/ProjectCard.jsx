import React from 'react'

function Card({link, name, description, stack}) {
  return (
    <div>
      <img src={ link } /> 
      <h1>{ name }</h1>
      <p>{ description }</p>
      <span>{ stack }</span>
    </div>

  )
}

export default function ProjectCard() {
  return (
    <div>
        <div className="flex flex-row flex-wrap">
          <Card name={"Slice Stree Pizza"} link={"../assets/SliceStreet_Project_Screenshot.jpg"} description={"React web app project for a fun pizza restaurant. "} stack={"UI design | HTML | CSS | React"}/>
        </div>
    </div>
  )
}

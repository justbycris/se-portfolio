import React from 'react'
import ProjectCard from './ProjectCard'

export default function Section({title, description }) {
  return (
    <div className="flex flex-col justify-center max-w-xl m-auto px-3 py-0">
        <h1 className="text-bold text-3xl text-slate-800 font-custom font-medium py-0.5">{ title }</h1>
        <p className="font-extra text-slate-700 py-3">{ description }</p>
    <div>
    </div>
    </div>
  )
}

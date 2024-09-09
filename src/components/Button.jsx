import React from 'react'
import { Link } from 'react-router-dom'




export default function Button({buttonLink, label}) {
  return (
    <div className="flex flex-row justify-start max-w-xl m-auto px-3 box-border">
    <Link to={buttonLink}><button className="block bg-slate-900 px-3 py-3 text-white rounded-lg mt-0 mb-8 mr-auto ml-0 
    font-extra font-medium text-sm  w-64  hover:bg-slate-800 mx-auto ">{ label }  &#8594;</button></Link>
    </div>
  )
}

import React from 'react'


export default function Experience({logo, altLogo, company, role, start, end}) {
  return (
    <div className="flex flex-row justify-start max-w-xl px-3 mt-2 align-top ">
        <img src={logo} alt={altLogo} className="w-28 h-1/2 px-2 box-border mr-0 ml-0 "/>
        <div className="flex flex-col box-border px-2 ">
          <h3 className="font-custom text-xl text-slate-800">{company}</h3>
          <p className="font-extra text-md text-slate-600">{role}</p>
          <span className="font-extra text-sm text-slate-500 mt-5">{start} &#8594; {end}</span>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-300 max-w-xl mx-auto"></hr>
        </div>
    </div>
  )
}

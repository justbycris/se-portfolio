import React from 'react'
import Button from './Button'

export default function Text({header, subtitle, copy }) {
  return (
    <div className="flex flex-col justify-center max-w-xl m-auto px-3 py-10" >
        <h1 className="text-bold text-5xl font-custom py-0.5 font-medium">{ header }</h1>
        <p className="font-extra text-2xl text-slate-600 py-1">{ subtitle }</p>
        <p className="font-extra text-lg text-slate-600 py-4 leading-7 w-full">{ copy }</p>
        <Button label="Learn More >"></Button>
        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-300"></hr>
    </div>
  )
}

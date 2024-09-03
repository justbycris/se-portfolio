import React from 'react'

export default function Text({header, subtitle, copy }) {
  return (
    <div className="flex flex-col justify-center max-w-xl m-auto px-3 pt-20 pb-2" >
        <h1 className="text-bold text-4xl font-custom py-0.5 font-medium text-slate-800 ">{ header }</h1>
        <p className="font-extra text-2xl text-slate-500 py-1 leading-8">{ subtitle }</p>
        <p className="font-extra text-lg text-slate-600 py-4 leading-7 w-full">{ copy }</p>
    </div>
  )
}

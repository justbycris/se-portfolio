import React from 'react'

export default function Social({channel, url, value}) {
  return (
    <div>
        <div className="w-64 flex flex-col justify-start mx-1 my-3 "> 
            <h1 className="font-custom text-lg font-bold text-slate-800 ">{channel}</h1>
            <p className="font-extra text-base text-slate-600"><a href={url} target="_blank" className="hover:underline">{value}</a></p>
        </div>
    </div>
  )
}

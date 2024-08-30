import React from 'react'


export default function Button({label}) {
  return (
    <div className="flex flex-row justify-start max-w-xl m-auto px-3 box-border">
    <button className="block bg-slate-900 p-4 text-white rounded-lg mt-0 mb-8 mr-auto ml-0 font-extra font-medium text-sm  w-64  hover:bg-slate-700 mx-auto ">{ label }</button>
    </div>
  )
}

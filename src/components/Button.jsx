import React from 'react'


export default function Button({label}) {
  return (
    <button className="bg-slate-900 p-4 text-white rounded-lg my-6 font-extra text-sm font-medium w-64 hover:bg-slate-700">{ label }</button>
  )
}

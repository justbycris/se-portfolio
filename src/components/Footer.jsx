import React from 'react'

export default function Footer() {
  return (
    <div>
        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-300 max-w-xl mx-auto mt-20"></hr>
        <div className="max-w-4xl display flex flex-row flex-nowrap justify-around pb-20 m-auto ">
            <span className="font-custom font-light text-slate-500 text-sm">&copy; 2024 / Cristi Gtrz. Name</span>
            <span className="max-w-xl font-custom font-light text-sm text-slate-500 hover:underline cursor-pointer">View code</span>
        </div>
    </div>
  )
}

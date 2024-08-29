import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md ">
        <div className="flex justify-between items-center max-w-6xl p-4 mx-auto">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap text-slate-500">CGN</h1>
            <ul className="flex gap-4">
                <Link to="/home">
                <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">Home</li>
                </Link>
                <Link to="/about">
                <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">About</li>
                </Link>
                <Link to="/contact">
                <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">Contact</li>
                </Link>
            </ul>
        </div>
       
    </header>
  )
}

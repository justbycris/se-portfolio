import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-100 shadow-md ">
        <div className="flex justify-between items-center px-4 py-4 mx-auto max-w-screen-md">
            <h1 className="font-custom text-sm sm:text-xl flex flex-wrap text-slate-600">CGN</h1>
            <ul className="flex gap-4">
                <Link to="/home">
                <li className=" text-slate-700 bg-gray-100 hover:underline cursor-pointer font-extra">home</li>
                </Link>
                <Link to="/about">
                <li className=" text-slate-700 hover:underline cursor-pointer font-extra">about</li>
                </Link>
                <Link to="/contact">
                <li className=" text-slate-700 hover:underline cursor-pointer font-extra">contact</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

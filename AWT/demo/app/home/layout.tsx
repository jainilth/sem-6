"use client"

import Link from 'next/link'
import React, { useState } from 'react'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div>
      <nav className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-800">Navbar</Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>

          <div className={`${open ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 mt-3 md:mt-0">
              <li>
                <Link href="/home" className="text-gray-700 hover:text-gray-900">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              </li>
              <li className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-gray-700 hover:text-gray-900">
                  More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white border rounded shadow-md w-44 z-20">
                    <li><Link href="/home/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home About</Link></li>
                    <li><Link href="/home/newabout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">New About</Link></li>
                    <li><hr className="my-1" /></li>
                    <li><Link href="/home/third" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Third</Link></li>
                  </ul>
                )}
              </li>
            </ul>

            <div className="mt-3 md:mt-0 md:ml-6 flex items-center space-x-4">
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>

              <form className="hidden md:flex items-center" role="search">
                <input className="border rounded px-2 py-1 text-sm" type="search" placeholder="Search" aria-label="Search" />
                <button className="ml-2 border border-green-600 text-green-600 px-3 py-1 rounded text-sm" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 flex mt-6">
        <aside className="w-1/4 border border-blue-500 p-4">sidebar</aside>
        <main className="flex-1 pl-6">{children}</main>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  function toggleMenu() {
    setIsExpanded(!isExpanded);

  } 

  return (
    <header>
        <div className="flex flex-row justify-between items-center px-24">
            <div className="basis-1/3">
                <Link href="/">
                    <Image src="/img/layout/army-wilson.jpg" alt="Alistair Wilson" width={144} height={144}/>
                </Link>
            </div>
            <div className="basis-2/3 text-right">
                <nav className="flex items-center float-right justify-between flex-wrap p-6">
                    <div className="block lg:hidden">
                        <button 
                        className="flex items-center px-3 py-2 border border-slate-500 rounded hover:text-white hover:border-white" 
                        onClick={toggleMenu}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
                        <div className="text-sm lg:flex-grow">
                            <Link 
                            href="/"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                            >
                                    Home
                            </Link>
                            <Link 
                            href="/books"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                            >
                                    Books
                            </Link>
                            <Link 
                            href="/lab"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                            >
                                    Lab
                            </Link>
                            <Link 
                            href="/about"
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                            >
                                    About
                            </Link>
                            <Link 
                            href="/contact"
                            className="block mt-4 lg:inline-block lg:mt-0 border-slate-500 hover:text-white mr-4"
                            >
                                    Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

import React, {Component,Fragment, useEffect} from 'react';
import styled from '@emotion/styled'
import xw, { cx } from 'xwind'
import Link from 'next/link'
import Image from 'next/image'
import {BsBell} from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'
// import {BsBell} from 'react-icons/bs'


const Navbar = styled.div(xw`
    max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
`)


const Layout = () => {

    const [userDetails, setUser] = React.useState({
        name: "Moh Ola",
        email: "mohola@gmail.com"
    })
    const [openPanel, setPanel] = React.useState(false)

return (
<div>

  <nav css={xw`bg-gray-800`}>
    
    <Navbar>
      <div css={xw`flex items-center justify-between h-16`}>
        <div css={xw`flex items-center`}>
          <div css={xw`flex-shrink-0`}>
              <h1 css={xw`font-bold text-3xl p-3 text-green-600`}> LIVO</h1>
          </div>
          <div css={xw`hidden md:block`}>
            <div css={xw`ml-10 flex items-baseline space-x-4`}>
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link href="/"><span  css={xw`bg-gray-900 text-white px-3 py-2 cursor-pointer rounded-md text-sm font-medium`}>Dashboard</span></Link>

              <Link href="/"><span  css={xw`text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium`}>Orders</span></Link>

              <Link href="/"><span  css={xw`text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium`}>Pickups</span></Link>

              <Link href="/"><span  css={xw`text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium`}>Transfers</span></Link>

              <Link href="/"><span  css={xw`text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium`}>Inventory</span></Link>

              <Link href="/"><span  css={xw`text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium`}>Payments</span></Link>
            </div>
          </div>
        </div>
        <div css={xw`hidden md:block`}>
          <div css={xw`ml-4 flex items-center md:ml-6`}>
            <button css={xw`bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 `}>
              <span css={xw`sr-only`}>View notifications</span>
              {/* <!-- Heroicon name: bell --> */}
              <BsBell/>
            </button>

            {/* <!-- Profile dropdown --> */}
            <div css={xw`ml-3 relative`}>
              <div>
                <button onClick={()=> setPanel(!openPanel)} id="user-menu" aria-haspopup="true" css={xw`max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 `}>
                  <span css={xw`sr-only`}>Open user menu</span>
                  <MdAccountCircle css={xw`text-xl text-white`}/>
                </button>
              </div>
              {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
              {openPanel && <div role="menu" aria-orientation="vertical" aria-labelledby="user-menu" css={xw`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`}>
                <a href="#" role="menuitem" css={xw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}>Your Profile</a>

                <a href="#" role="menuitem" css={xw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}>Settings</a>

                <a href="#" role="menuitem" css={xw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}>Sign out</a>
              </div>}
            </div>
          </div>
        </div>


        {/* FOR MOBILE */}
        <div css={xw`-mr-2 flex md:hidden`}>
          {/* <!-- Mobile menu button --> */}
          <button css={xw`bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 `}>
            <span css={xw`sr-only`}>Open main menu</span>
            {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
            {/* <svg css={xw`block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true`}>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg> */}
            {/* <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
            {/* <svg css={xw`hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true`}>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg> */}
          </button>
        </div>
      </div>
    </Navbar>


    {/* <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    --> */}
    <div css={xw`hidden md:hidden`}>
      <div css={xw`px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <a href="#" css={xw`bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium`}>Dashboard</a>

        <a href="#" css={xw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>Team</a>

        <a href="#" css={xw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>Projects</a>

        <a href="#" css={xw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>Calendar</a>

        <a href="#" css={xw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>Reports</a>
      </div>
      <div css={xw`pt-4 pb-3 border-t border-gray-700`}>
        <div css={xw`flex items-center px-5`}>
          <div css={xw`flex-shrink-0`}>
              <MdAccountCircle css={xw`text-xl text-white`}/>
          </div>
          <div css={xw`ml-3`}>
            <div css={xw`text-base font-medium leading-none text-white`}>Tom Cook</div>
            <div css={xw`text-sm font-medium leading-none text-gray-400`}>tom@example.com</div>
          </div>
          <button css={xw`ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 `}>
            <span css={xw`sr-only`}>View notifications</span>
            {/* <!-- Heroicon name: bell --> */}
            {/* <svg css={xw`h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true`}>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg> */}
          </button>
        </div>
        <div css={xw`mt-3 px-2 space-y-1`}>
          <a href="#" css={xw`block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700`}>Your Profile</a>

          <a href="#" css={xw`block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700`}>Settings</a>

          <a href="#" css={xw`block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700`}>Sign out</a>
        </div>
      </div>
    </div>
  </nav>
  

  <header css={xw`bg-transparent shadow`}>
    <div css={xw`max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8`}>
      <h1 css={xw`text-2xl font-bold leading-tight text-gray-900`}>
        Dashboard
      </h1>
    </div>
  </header>
  <main>
    <div css={xw`max-w-7xl flex mx-auto py-6 sm:px-6 lg:px-8`}>
      {/* <!-- Replace with your content -->
      <div css={xw`px-4 py-6 sm:px-0`}>
        <div css={xw`border-4 border-dashed border-gray-200 rounded-lg h-96`}></div>
      </div>
      <!-- /End replace --> */}
    </div>
  </main>
</div>);

}

export default Layout
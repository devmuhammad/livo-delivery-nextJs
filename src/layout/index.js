import React, {Component,Fragment, useEffect} from 'react';
import styled from '@emotion/styled'
import xw, { cx } from 'xwind'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {BsFillBellFill} from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'
import {HiChatAlt} from 'react-icons/hi'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'
import {IoMdWallet} from 'react-icons/io'
import {MdShoppingCart} from 'react-icons/md'
import {AiFillShop} from 'react-icons/ai'
import {FaTruck} from 'react-icons/fa'
import {BsArchiveFill} from 'react-icons/bs'
import {FaCreditCard} from 'react-icons/fa'
import {IoMdHelpCircle} from 'react-icons/io'
import {MdDashboard} from 'react-icons/md'
import {GoSignOut} from 'react-icons/go'
import {MdBackspace} from 'react-icons/md'
import {FiChevronsLeft} from 'react-icons/fi'
import {ImMenu} from 'react-icons/im'


const Navbar = styled.div(xw`
    max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
`)


const Layout = ({screens, children}) => {

    const [userDetails, setUser] = React.useState({
        name: "Moh Ola",
        email: "mohola@gmail.com",
        balance: "3050"
    })
    const [openPanel, setPanel] = React.useState(false)
    const [mobileMenu, setMenu] = React.useState(false)
    const [menuOpen, setOpenMenu] = React.useState(true)
    const router = useRouter()

    const [currRoute, setRoute] = React.useState()

    React.useEffect(() => {

      if (router.pathname == '/'){
        setRoute("Dashboard")
      }else {
        
        setRoute(getRouteName())
      }
    },[])

    function getRouteName(){

     return router.pathname.charAt(1).toUpperCase()+router.pathname.substring(2)
    }

    function openMenu(){
      setOpenMenu(!menuOpen)
      
      document.getElementById("menubar").style.width = `20%`
      const menuDiv = document.querySelectorAll("[id='menudiv']")

      for(let i=0; i<menuDiv.length; i++){
        menuDiv[i].style.display="flex";
      }
    }

    function closeMenu(){
      setOpenMenu(!menuOpen)
      
      document.getElementById("menubar").style.width = `5%`
      const menuDiv = document.querySelectorAll("[id='menudiv']")

      for(let i=0; i<menuDiv.length; i++){
        menuDiv[i].style.display="none";
      }
    }

return (
  
<div css={xw`h-full`}>
  
  
  <nav css={xw`bg-white`}>
    
    <Navbar>
      <div css={xw`flex items-center justify-between h-16`}>
        <div css={xw`flex items-center`}>
          <div css={xw`flex-shrink-0`}>
              <h1 css={xw`font-bold text-3xl p-3 text-green-600`}> LIVO</h1>
          </div>
          
        </div>
        
        <div css={xw`hidden md:block`}>
        
          <div css={xw`ml-4 flex items-center md:ml-6`}>
          <span css={xw`flex p-1 px-2 bg-gray-200 cursor-pointer items-center rounded-full`}>
                <IoMdWallet css={xw`text-lg text-gray-800`}/>&nbsp;
                <p css={xw`text-xl text-green-600`}>{userDetails.balance}<span css={xw`text-xs font-bold`}>MAD</span></p>
            </span>&nbsp;&nbsp;&nbsp;
            
            <button css={xw`bg-green-700 p-1 rounded-full text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}>
              <span css={xw`sr-only`}>View messages</span>
              {/* <!-- Heroicon name: bell --> */}
              <HiChatAlt css={xw`text-xl`}/>
            </button>&nbsp;&nbsp;&nbsp;
            <button css={xw`bg-yellow-700 p-1 rounded-full text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}>
              <span css={xw`sr-only`}>View notifications</span>
              {/* <!-- Heroicon name: bell --> */}
              <BsFillBellFill css={xw`text-xl`}/>
            </button>&nbsp;&nbsp;

            {/* <!-- Profile dropdown --> */}
            <div css={xw`ml-3 relative`}>
              <div>
                <button onClick={()=> setPanel(!openPanel)} id="user-menu" aria-haspopup="true" css={xw`max-w-xs bg-gray-800 rounded-full text-white flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 `}>
                  <span css={xw`sr-only`}>Open user menu</span>
                  <MdAccountCircle css={xw`text-xl `}/>
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
                <Link href="#" role="menuitem"><span css={xw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}>Your Profile</span></Link>

                {/* <Link href="#" role="menuitem"><span css={xw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}>Settings</span></Link> */}

                <Link href="#" role="menuitem"><span css={xw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}>Sign out</span></Link>
              </div>}
            </div>&nbsp;

            
          </div>
        </div>


        {/* FOR MOBILE */}
        <div css={xw`-mr-2 flex md:hidden`}>
          {/* <!-- Mobile menu button --> */}
          <button id="mobileMenu" css={xw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 `}>
            <span css={xw`sr-only`}>Open main menu</span>
            {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
            
            {mobileMenu ? <IoMdClose css={xw`text-lg`} onClick={()=> setMenu(!mobileMenu)}/>
            : <HiOutlineMenuAlt3 css={xw`text-lg`} onClick={()=> setMenu(!mobileMenu)}/>
            }
            {/* <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
            
          </button>
        </div>
      </div>
    </Navbar>


    {/* <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    --> */}
    {mobileMenu && <div id="mobileMenu" css={xw`md:hidden`}>
      <div css={xw`px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col`}>
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link href="/"><span  css={xw`text-gray-200 px-3 py-2 flex flex-row cursor-pointer rounded-md text-sm font-medium`}><MdDashboard css={xw`text-lg`} />&nbsp; &nbsp;Dashboard</span></Link>

              <Link href="/orders"><span  css={xw`text-gray-200 hover:bg-gray-700 hover:text-white flex flex-row cursor-pointer px-3 py-2 rounded-md text-sm font-medium`}><MdShoppingCart css={xw`text-lg`} />&nbsp; &nbsp; Orders</span></Link>

              <Link href="/pickups"><span  css={xw`text-gray-200 hover:bg-gray-700 hover:text-white flex flex-row cursor-pointer px-3 py-2 rounded-md text-sm font-medium`}><AiFillShop css={xw`text-lg`} />&nbsp; &nbsp; Pickups</span></Link>

              <Link href="/transfers"><span  css={xw`text-gray-200 hover:bg-gray-700 hover:text-white flex flex-row cursor-pointer px-3 py-2 rounded-md text-sm font-medium`}><FaTruck css={xw`text-lg`} />&nbsp; &nbsp;  Transfers</span></Link>

              <Link href="/inventory"><span  css={xw`text-gray-200 hover:bg-gray-700 hover:text-white flex flex-row cursor-pointer px-3 py-2 rounded-md text-sm font-medium`}><BsArchiveFill css={xw`text-lg`} />&nbsp;&nbsp;  Inventory</span></Link>

              <Link href="/payments"><span  css={xw`text-gray-200 hover:bg-gray-700 hover:text-white flex flex-row cursor-pointer px-3 py-2 rounded-md text-sm font-medium`}><FaCreditCard css={xw`text-lg`} />&nbsp; &nbsp; Payments</span></Link>
      </div>
      <div css={xw`pt-4 pb-3 border-t border-gray-700`}>
        <div css={xw`flex items-center px-5`}>
          <div css={xw`flex-shrink-0`}>
              <MdAccountCircle css={xw`text-xl text-white`}/>
          </div>
          <div css={xw`ml-3`}>
            <div css={xw`text-base font-medium leading-none text-white`}>{userDetails.name}</div>
            <div css={xw`text-sm font-medium leading-none text-gray-400`}>{userDetails.email}</div>
          </div>
          <button css={xw`ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 `}>
            <span css={xw`sr-only`}>View notifications</span>
            <BsFillBellFill css={xw`text-xl `}/>
          </button>
        </div>
        <div css={xw`mt-3 px-2 space-y-1`}>
            <Link href="#" role="menuitem"><span css={xw`block px-4 py-2 flex flex-row text-sm text-gray-300 hover:bg-gray-100`}> <MdAccountCircle css={xw`text-xl`}/>&nbsp; &nbsp; Your Profile</span></Link>

            {/* <Link href="#" role="menuitem"><span css={xw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}>Settings</span></Link> */}

            <Link href="#" role="menuitem"><span css={xw`block px-4 py-2 text-sm flex flex-row text-gray-300 hover:bg-gray-100`}><GoSignOut css={xw`text-xl `}/>&nbsp; &nbsp; Sign out</span></Link>
        </div>
      </div>
    </div>}
  </nav>

  {/* MENUBAR */}
  <div css={xw`flex flex-row w-full`} class="nav-container">
    <div id="menubar" css={xw`hidden invisible md:flex md:visible`} >

    <Link href="/"><div css={xw`w-full text-white p-1 cursor-pointer my-2 grid justify-items-stretch font-medium`}>
          {menuOpen ? <FiChevronsLeft css={xw`text-2xl justify-self-end mr-3`} onClick={() => closeMenu()}/> :
          <ImMenu css={xw`text-2xl justify-self-center`} onClick={() => openMenu()}/> }
          
      </div></Link>

    <Link href="/"><div className={router.pathname == "/" && "activeMenu"} css={xw`w-full text-white p-3 cursor-pointer my-3 flex flex-row justify-start items-center hover:bg-navy-darker hover:border-l-8 border-navy-base font-medium`}>
          <MdDashboard css={xw`text-2xl`} /> 
          <p id="menudiv" css={xw`text-lg pl-8`}> Dashboard </p>
      </div></Link>
    <Link href="/orders"><div className={router.pathname == "/orders" && "activeMenu"} css={xw`w-full text-white p-3 cursor-pointer my-3 flex flex-row justify-start items-center hover:bg-navy-darker hover:border-l-8 border-navy-base font-medium`}>
          <MdShoppingCart css={xw`text-2xl`} /> 
          <p id="menudiv" css={xw`text-lg pl-8`}> Orders </p>
      </div></Link>
    <Link href="/pickups"><div className={router.pathname == "/pickups" && "activeMenu"} css={xw`w-full text-white p-3 cursor-pointer my-3 flex flex-row justify-start items-center hover:bg-navy-darker  hover:border-l-8 border-navy-base font-medium`}>
          <AiFillShop css={xw`text-2xl`} /> 
          <p id="menudiv" css={xw`text-lg pl-8`}> Pickups </p>
      </div></Link>
    <Link href="/transfers"><div className={router.pathname == "/transfers" && "activeMenu"} css={xw`w-full text-white p-3 cursor-pointer my-3 flex flex-row justify-start items-center hover:bg-navy-darker  hover:border-l-8 border-navy-base font-medium`}>
          <FaTruck css={xw`text-2xl`} /> 
          <p id="menudiv" css={xw`text-lg pl-8`}> Transfers </p>
      </div></Link>
    <Link href="/inventory"><div className={router.pathname == "/inventory" && "activeMenu"} css={xw`w-full text-white p-3 cursor-pointer my-3 flex flex-row justify-start items-center hover:bg-navy-darker  hover:border-l-8 border-navy-base font-medium`}>
          <BsArchiveFill css={xw`text-2xl`} /> 
          <p id="menudiv" css={xw`text-lg pl-8`}> Inventory </p>
      </div></Link>
    <Link href="/payments"><div className={router.pathname == "/payments" && "activeMenu"} css={xw`w-full text-white p-3 cursor-pointer my-3 flex flex-row justify-start items-center hover:bg-navy-darker  hover:border-l-8 border-navy-base font-medium`}>
          <FaCreditCard css={xw`text-2xl`} /> 
          <p id="menudiv" css={xw`text-lg pl-8`}> Payments </p>
      </div></Link>

    <button css={xw`bg-green-700 text-white p-2 self-center items-center flex flex-row absolute bottom-0 mb-10 rounded-full`}>
    
    <IoMdHelpCircle css={xw`text-2xl`} /> 
    <p id="menudiv" css={xw`text-lg pl-2`}> Help </p>
    </button>
    </div>

  <div css={xw`w-full h-full`}>
  <header css={xw`bg-gray-100 shadow`}>
    <div css={xw`max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-12`}>
      <h1 css={xw`text-2xl font-bold leading-tight text-gray-900`}>
        {currRoute}
      </h1>
    </div>
  </header>
  <main css={xw`max-w-7xl mx-auto pb-6 sm:px-6 lg:px-12 bg-gray-100 h-full`}>
    <div >
      {screens}
    </div>
  </main>
  </div>
  </div>
</div>);

}

export default Layout
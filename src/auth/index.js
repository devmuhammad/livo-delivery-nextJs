import React from 'react';
import xw, { cx } from 'xwind'
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import Dropdown from './components/dropdown'
import {FaLock} from  'react-icons/fa'
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import {login} from '../redux/actions'

const Auth = () => {

    const dispatch = useDispatch();
   

    const [shwlogin, setLogin] = React.useState(true)

    const [dropData, setDropData ] = React.useState([
        'Client', 'Admin', 'Warehouse'
    ])

    const [signinDet, setSignin] = React.useState({
        email: '',
        password: ''
    })
    const [signupDet, setSignup] = React.useState({
        fullname: '',
        email: '',
        phone:'',
        regType:'',
        password: '',
        
    })

    function tryLogin(e){
        e.preventDefault()
        if (!signinDet.email) return toast.error('Please enter email')
        // dispatch(notify('Please enter Email', 'error')) 
        if (!signinDet.password) return toast.error('Please enter password')
        

        dispatch(login(signinDet))
    }

    function handleSigninDet(ev){
        setSignin({...signinDet, [ev.target.name]: ev.target.value})
    }
    function handleSignupDet(ev){
        setSignin({...signupDet, [ev.target.name]: ev.target.value})
    }


    function showSignin(){

        return (
            <form css={xw`mt-8 space-y-6`}>
            <input type="hidden" name="remember" value="true"/>
            <div css={xw`rounded-md shadow-sm -space-y-px`}>
                <div>
                <label htmlFor="email-address" css={xw`sr-only`}>Email address</label>
                <input onChange={event => handleSigninDet(event)} id="email-address" name="email" type="email" placeholder="Email address" autoComplete="email" required css={xw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-navy-base focus:border-navy-base focus:z-10 sm:text-sm`}/>
                </div>
                <div>
                <label htmlFor="password" css={xw`sr-only`}>Password</label>
                <input onChange={event => handleSigninDet(event)} id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" required css={xw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-navy-base focus:border-navy-base focus:z-10 sm:text-sm`}/>
                </div>
            </div>

            <div css={xw`flex items-center justify-between`}>
                <div css={xw`flex items-center`}>
                <input id="remember_me" name="remember_me" type="checkbox" css={xw`h-4 w-4 text-navy-dark focus:ring-navy-base border-gray-300 rounded`}/>
                <label htmlFor="remember_me" css={xw`ml-2 block text-sm text-gray-400`}>
                    Remember me
                </label>
                </div>

                <div css={xw`text-sm`}>
                <a href="#" css={xw`font-medium text-gray-400 hover:text-navy-base`}>
                    Forgot your password?
                </a>
                </div>
            </div>

            <div>
                <button onClick={(e) => tryLogin(e)} type="submit" css={xw`relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-navy bg-gray-100 hover:bg-navy hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-base`}>
                <span css={xw`absolute left-0 inset-y-0 flex items-center pl-3`}>
                    {/* <!-- Heroicon name: lock-closed --> */}
                    <FaLock />
                </span>
                Sign in
                </button>
            </div>
        </form>
        )
    }


    function showSignup(){

        return (
            <form css={xw`mt-8 space-y-6`}>
            <input type="hidden" name="remember" value="true"/>
            <div css={xw`rounded-md shadow-sm -space-y-px`}>
                <div>
                <label htmlFor="email-address" css={xw`sr-only`}>Fullname</label>
                <input id="fullname" name="fullname" type="text" placeholder="Fullname" required css={xw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-navy-base focus:border-navy-base focus:z-10 sm:text-sm`}/>
                </div>
                <div>
                <label htmlFor="email-address" css={xw`sr-only`}>Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" placeholder="Email address" required css={xw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navy-base focus:border-navy-base focus:z-10 sm:text-sm`}/>
                </div>
                <div>
                <label htmlFor="phone" css={xw`sr-only`}>Phone</label>
                <input id="phone" name="phone" type="phone" placeholder="Phone" autoComplete="email" required css={xw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navy-base focus:border-navy-base focus:z-10 sm:text-sm`}/>
                </div>
                <div css={xw`w-full bg-white`}>
                    <Dropdown dropData={dropData} />
                </div>
                <div>
                <label htmlFor="password" css={xw`sr-only`}>Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Password" required css={xw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navy-base focus:border-navy-base focus:z-10 sm:text-sm`}/>
                </div>
                <div>
                <label htmlFor="conf-password" css={xw`sr-only`}>Confirm Password</label>
                <input id="conf-password" name="conf-password" type="password" placeholder="Confirm Password" required css={xw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-navy-base focus:border-navy-base focus:z-10 sm:text-sm`}/>
                </div>
            </div>

            <div css={xw`flex items-center justify-between`}>
                <div css={xw`flex items-center`}>
                <input id="remember_me" name="remember_me" type="checkbox" css={xw`h-4 w-4 text-navy-base focus:ring-navy-base border-gray-300 rounded`}/>
                <label htmlFor="remember_me" css={xw`ml-2 block text-sm text-gray-400`}>
                    Remember me
                </label>
                </div>

                <div css={xw`text-sm`}>
                <a href="#" css={xw`font-medium text-gray-400 hover:text-navy-base`}>
                    Forgot your password?
                </a>
                </div>
            </div>

            <div>
                <button type="submit" css={xw`relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-navy text-navy bg-gray-100 hover:bg-navy hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-base`}>
                <span css={xw`absolute left-0 inset-y-0 flex items-center pl-3`}>
                    {/* <!-- Heroicon name: lock-closed --> */}
                    <FaLock />
                </span>
                Sign Up
                </button>
            </div>
        </form>
        )
    }

    return (
       
<div css={xw`min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8`}>
    
  <div css={xw`max-w-md w-full space-y-8 bg-navy p-4 rounded-md`}>
    <div>
    <h1 css={xw`font-black text-5xl p-3 text-green-600 justify-center text-center`}> LIVO</h1>      
    <h2 css={xw`mt-6 text-center  text-xl font-extrabold text-gray-200`}>
        {shwlogin ? 'Sign in to your account' : 'Create account'}
      </h2>
      <p css={xw`mt-2 text-center text-gray-400 text-sm `}>
        Or <br />
        <span onClick={() => setLogin(!shwlogin)} css={xw`font-medium text-gray-400 hover:text-navy-base cursor-pointer`}>
          {shwlogin ? 'Create an account' : 'Login here'}
        </span>
      </p>
    </div>
    {shwlogin ? showSignin() : showSignup() }
  </div>
</div>


    )

}

export default Auth
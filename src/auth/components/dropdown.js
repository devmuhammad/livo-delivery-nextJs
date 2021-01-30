import React from 'react';
import xw, { cx } from 'xwind'
import {FiChevronDown} from 'react-icons/fi'

const Dropdown = (props) => {

    const {dropData} = props
    const [openDd, setDd] = React.useState(false)
    return (

<div css={xw`relative inline-block text-left w-full`}>
  <div>
    <button onClick={() => setDd(!openDd)} type="button"  id="options-menu" aria-haspopup="true" aria-expanded="true" css={xw`inline-flex justify-start w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-navy-dark`}>
      Account type
      <FiChevronDown css={xw`text-lg`}/>
    </button>
  </div>

  {/* <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
  {openDd && <div css={xw`origin-top-right absolute right-0 mt-2 w-full z-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
    
    <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu" css={xw`py-1`}>
      {dropData.map((item) => {
          return (
            <a key={item} role="menuitem" css={xw`block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900`}>{item}</a>
          )
      })
      }
    </div>
  </div>}
</div>

    )

}

export default Dropdown
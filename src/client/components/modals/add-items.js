import React from 'react';
import xw, { cx } from 'xwind'
import Image from 'next/image'
import DatePicker from "react-datepicker";
import { HiOutlineSelector,HiChevronDown} from 'react-icons/hi'
import { FaTimes} from 'react-icons/fa'
import { IoMdSave, IoMdSend} from 'react-icons/io'


import {products} from '../../../../pages/api/data'
import { regions } from "../../../constants/country";
const AddItems = () => {

    const [openProd, setOpen] = React.useState(false)
    const [startDate, setStartDate] = React.useState(new Date());
    const [selectedItems, setSelected] = React.useState([])
    const [openFrom, setFrom] = React.useState(false)
    const [openTo, setTo] = React.useState(false)
    // const []
    const [newOrder, setOrder] = React.useState({
        price: 0,
        receiver: '',
        delivery_date: '',
        comment: '',
        delivery_to: '',
        address: '',
        delivery_from: ''
    })

    function chooseProduct(product){
        setSelected([
            ...selectedItems, product
        ])
        setOrder({
            ...newOrder, price: selectedItems.length > 0 ? selectedItems.reduce((a,b) => a + b.price*b.quantity,0)+product.price : product.price
        })
    }

    async function removeProd(product){
        await setSelected(selectedItems.filter(item => item.code !== product.code))
        setOrder({
            ...newOrder, price: newOrder.price - (product.price*product.quantity)
            
        })
        if(selectedItems.length === 0) setOrder({...newOrder, price: 0 })
    }

    function handleInput (e){
        setOrder({...newOrder, [e.target.name]: e.target.value })
    }
    function setLocation(type, value){
        setOrder({
            ...newOrder, type: value
        })
    }
    async function handleQuantity(e, prod){
        const qty = e.target.value

        if (!qty || qty === 0 || prod.quantity == qty) return; 
        await setSelected(selectedItems.map(el => prod.code === el.code ? {...el, quantity: qty} :el))
        
        
        const itemprice = (qty - prod.quantity)*prod.price
        setOrder({
            ...newOrder, price: newOrder.price + itemprice 
            
        })

    }


    function showFrom(){
        return (
            <div css={xw`relative inline-block text-left w-full`}>
                <div>
                <label for="from" css={xw`block text-sm font-medium text-gray-600 mt-1`}>Pickup</label>
                    <button type="button" onClick={() => {setTo(false); setFrom(!openFrom)}} css={xw`inline-flex text-gray-400 justify-between w-full cursor-pointer rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`} id="options-menu" aria-haspopup="true" aria-expanded="true">
                        From
                    <HiChevronDown />
                    </button>
                </div>
                {openFrom && <div css={xw`max-h-44 overflow-y-scroll origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
                    <div css={xw`py-1`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                     
                        {regions.map((reg) => {
                        return (<button type="submit" onClick={()=> setLocation('delivery_from',reg.region)} css={xw`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900`} role="menuitem">
                            {reg.region}
                        </button>)})}
                    </div>
                </div>}
            </div>
        )
    }
    function showTo(){
        return (
            <div css={xw` relative inline-block text-left  w-full`}>
                <div>
                    <label for="to" css={xw`block text-sm font-medium text-gray-600 mt-1`}>Deliver</label>
                    <button type="button" onClick={() => {setFrom(false); setTo(!openTo)}} css={xw`inline-flex text-gray-400 justify-between w-full cursor-pointer rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`} id="options-menu" aria-haspopup="true" aria-expanded="true">
                        To
                    <HiChevronDown />
                    </button>
                </div>
                {openTo&& <div css={xw`max-h-44 overflow-y-scroll origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
                    <div css={xw`py-1`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                     
                        {regions.map((reg) => {
                        return (<button type="submit" onClick={()=> setLocation('delivery_to',reg.region)} css={xw`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900`} role="menuitem">
                            {reg.region}
                        </button>)})}
                    </div>
                </div>}
            </div>
        )
    }

    function ShowProducts(){
        return (
            //  <div css={xw`relative`}>
                <>
                     <div css={xw`absolute whitespace-nowrap mt-1 z-10 rounded-md bg-white shadow-lg`}>
                                <ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" css={xw`max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}>
                                 
                                {products.map((prod) => {
                                    return (<li key={prod.code} id="listbox-item-0" onClick={() => chooseProduct(prod)} role="option" css={xw`flex cursor-pointer relative py-2 pl-3 pr-9 hover:bg-navy-lightest hover:text-white`}>
                                    <div css={xw`flex flex-row`}>
                                    <div css={xw`flex-shrink-0 h-8 w-8 rounded-full`}>
                                        <Image width={24} height={24} css={xw`rounded-full`} src="/images/bird.jpeg" alt="" />
                                    </div>
                                    <div css={xw`ml-4`}>
                                        <div css={xw`text-sm font-normal text-gray-900`}>
                                        {prod.product}
                                        </div>
                                        <div css={xw`text-sm text-gray-500`}>
                                        {prod.code}
                                        </div>
                                    </div>
                                      
                                    </div>&nbsp;&nbsp;

                                    <span css={xw`absolute inset-y-0 right-0 flex items-center pr-4`}>
                                    <div css={xw`text-sm text-green-500`}>
                                            {/* X&nbsp;1 */}
                                            {prod.price}
                                        </div>
                                        
                                    </span>
                                </li>)
                                })}
                            </ul>
                        </div>
        {/* // </div> */}
        </>
        )
    }

        function showSelected(){
            return (
                <ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" css={xw` rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}>
                                 
                {selectedItems.map((prod) => {
                    return (<li key={prod.code} id="listbox-item-0" role="option" css={xw`flex bg-white cursor-default relative py-2 pl-3 pr-9 `}>
                    <div css={xw`flex flex-row`}>
                    <div css={xw`flex-shrink-0 h-8 w-8 rounded-full`}>
                        <Image width={24} height={24} css={xw`rounded-full`} src="/images/bird.jpeg" alt="" />
                    </div>
                    <div css={xw`ml-4`}>
                        <div css={xw`text-sm font-normal text-gray-900`}>
                        {prod.product}
                        </div>
                        <div css={xw`text-sm text-gray-500`}>
                        {prod.code}
                        </div>
                    </div>
                      
                    </div>&nbsp;&nbsp;

                    <span css={xw`absolute inset-y-0 right-0 flex flex-row items-center pr-2`}>
                        <div css={xw`text-sm text-green-500 `}>
                            {/* X&nbsp;1 */}
                            {prod.price}
                        </div>&nbsp;
                        <input type="number" name="quantity" id="quantity" css={xw`border block w-12  pl-1 py-2  sm:text-sm rounded-md`} 
                        // value={1}
                        onChange={(e) => handleQuantity(e,prod)}
                        placeholder="1" />
                        &nbsp;
                        
                        <FaTimes css={xw`text-red-500 cursor-pointer`} onClick={()=> removeProd(prod)}/>
                    </span>
                </li>)
                })}
            </ul>
            )
        }

   return ( <>
   <div css={xw`w-full mt-6 grid grid-cols-4 gap-2`}>
       <div css={xw`col-span-2`}>
        <label for="name" css={xw`block text-sm font-medium text-gray-600`}>Name</label>
        <input type="text" name="receiver" id="name" css={xw`border block w-full pl-3 py-2  sm:text-sm rounded-md`} 
        onChange={handleInput}
        placeholder="Receiver Name" />

       </div>
       <div css={xw` block`}>
       <label for="date" css={xw`block text-sm font-medium  text-gray-600`}>Delivery date</label>
        <DatePicker css={xw`p-2 border rounded-md`}  selected={startDate} onChange={date => setStartDate(date)} />
       </div>
       <div css={xw` place-self-center`}>
       <label for="date" css={xw`block text-sm font-medium  text-gray-600`}>Total &nbsp;<span css={xw`text-green-600 text-xs font-bold`}>(MAD)</span></label>
        <input type="number" name="price" id="total" css={xw`border border-green-600 block w-16 pl-1 py-2  sm:text-sm rounded-md`} 
            onChange={handleInput}
            value={newOrder.price}
            placeholder="Total" />
            {/* <p css={xw`text-green-600 p-2 text-lg bg-green-100 rounded-md`}>{newOrder.price}<span css={xw`text-xs font-bold`}>MAD</span></p> */}

       </div>
    </div>
    <div css={xw`w-full max-h-72 h-auto grid grid-rows-5 grid-flow-col gap-3 mt-3`}>
        <div css={xw`row-span-1 col-span-2`}>
        <div css={xw`mt-1 relative`}>
            <button onClick={() => {setOpen(!openProd)}} type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" css={xw`relative cursor-pointer w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}>
                <span css={xw`flex items-center`}>
                    <span css={xw`block text-gray-400`}>
                        Choose products
                    </span>
                </span>
                <span css={xw`ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none`}>
                    <HiOutlineSelector />
                </span>
            </button>

            {openProd && <ShowProducts />}
        </div>
        </div>

        <div css={xw`block col-span-2 row-span-1`}>
            <label for="address" css={xw`block text-sm font-medium text-gray-600`}>Address</label>
            <input type="text" name="address" id="address" css={xw`border block w-full pl-3 py-2 sm:text-sm rounded-md`} 
            onChange={handleInput}
            placeholder="Address" />
        </div>
        <div css={xw`flex col-span-2 row-span-1`}>

            {showTo()}
        </div>
        <div css={xw`col-span-2 row-span-2`}>
            <label for="comment" css={xw`block text-sm font-medium text-gray-600 mt-1`}>Comment</label>
            <textarea rows="3" name="comment" id="comment" css={xw`border block w-full pl-3 py-2 sm:text-sm rounded-md`} 
            onChange={handleInput}
            placeholder="Remark for delivery" />
            
        </div>
        <div css={xw`row-span-5 col-span-4 p-2 overflow-y-scroll bg-gray-100 border rounded-md`}>

        {showSelected()}
        </div>
    </div>
       <div css={xw`w-full mt-4 grid grid-cols-6 gap-3`}>
        <div >

        </div>
        <div css={xw`col-span-2 `}>
            <span css={xw`flex justify-center items-center text-white bg-yellow-500 cursor-pointer text-xl rounded-md p-2`}>
                <IoMdSave />&nbsp; Save draft
            </span>
        </div>
        <div css={xw`col-span-2 `}>
            <span css={xw`flex justify-center items-center text-white bg-green-600 cursor-pointer text-xl rounded-md p-2`}>
                <IoMdSend />&nbsp; Send to delivery
            </span>
        </div>
       </div>
        
    {/* </div> */}
    </>)
}

export default AddItems
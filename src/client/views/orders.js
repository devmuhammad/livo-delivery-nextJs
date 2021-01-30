import React from 'react';
import xw, { cx } from 'xwind'
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import Image from 'next/image'
import Modal from 'react-modal';


import TimeAgo from 'timeago-react';
import {BsThreeDots, BsCircleFill} from 'react-icons/bs'
import {BiCalendarEdit} from 'react-icons/bi'
import {VscDebugStepBack} from 'react-icons/vsc'
import {IoMdSend, IoMdCloseCircle} from 'react-icons/io'
import {FaHourglassHalf,FaTruck, FaCheckCircle} from 'react-icons/fa'
import {RiDraftFill} from 'react-icons/ri'
import {HiDotsCircleHorizontal, HiChatAlt} from 'react-icons/hi'
import {MdEdit, MdDeleteForever, MdLocationOn, MdLocationCity, MdCancel} from 'react-icons/md'
import EditItems from '../components/modals/edit-items' 

import {getAllOrders} from '../../redux/actions'

function isMobileDevice() {
	if (typeof window !== 'undefined') {
	return ( window.orientation > -1) || (navigator.userAgent.indexOf('IEMobile') !== -1);
	}
};

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 :  isMobileDevice() ?'90%':'65%'
    }
  };

  Modal.setAppElement('#__next')

const Orders = () => {

    const dispatch = useDispatch()

    const [dashDetails,setDashDet] = React.useState(useSelector((state) =>  state.order.orders, shallowEqual))
    const [showOptions, setOpts] = React.useState(false)
    const [optId, setOptId] = React.useState(undefined)
    const [showProd, setProd] = React.useState(false)
    const [prodId, setProdId] = React.useState(undefined)
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [currItem, setCurrItem] = React.useState(undefined)
    
    React.useEffect(() => {
        dispatch(getAllOrders())
        
    },[dashDetails])

    function deleteOrder(item){
        setDashDet(dashDetails.filter((det) => det.id !== item.id))

    }

    function switchModal() {
        setIsOpen(!modalIsOpen);
      }

    function showEdit(item){
        setCurrItem(item)
        switchModal()
    }

    function statusColor(status){
        if (status == 'draft') return (<span css={xw`flex flex-row items-center bg-gray-800 text-sm text-white p-2 rounded-md `}> <RiDraftFill /> &nbsp; {status}</span> )
        if (status == 'in-progress') return (<span css={xw`flex flex-row items-center bg-orange-500 text-sm text-white p-2 rounded-md`}><FaTruck /> &nbsp; {status}</span> )
        if (status == 'pending') return (<span css={xw`flex flex-row items-center bg-yellow-500 text-sm text-white p-2 rounded-md`}><FaHourglassHalf /> &nbsp; {status}</span> ) 
        if (status == 'fulfilled') return (<span css={xw`flex flex-row items-center bg-green-500 text-sm text-white p-2 rounded-md`}><FaCheckCircle /> &nbsp; {status}</span> ) 
        if (status == 'cancelled') return (<span css={xw`flex flex-row items-center bg-red-500 text-sm text-white p-2 rounded-md `}><MdCancel /> &nbsp; {status}</span> ) 
    }


    function DisplayOptions(item){
        
        // let optId;
        return ( <>
                <HiDotsCircleHorizontal onClick={() => {setOpts(!showOptions); setOptId(item.id)}} css={xw`text-xl cursor-pointer text-gray-500`}/>
                
                {showOptions && item.id === optId && <div css={xw`relative`}>
                <div css={xw`absolute whitespace-nowrap mt-1 rounded-md bg-white shadow-lg`}>
                    <ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" css={xw`max-h-56 rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}>
                    
                            {item.status == 'draft' && <li id="listbox-item-0" role="option" css={xw`flex flex-row items-center text-sm bg-orange-200 text-orange-600 cursor-pointer relative py-2 px-2 `}>
                       
                               <IoMdSend /> &nbsp; Send to delivery
                               </li>}
                            {item.status == 'cancelled' && <li id="listbox-item-0" role="option" css={xw`flex flex-row items-center text-sm bg-orange-200 text-orange-600 cursor-pointer relative py-2 px-2 `}>
                       
                               <VscDebugStepBack /> &nbsp; Return item
                               </li>}
                            {item.status !== 'fulfilled' && <li onClick={() => showEdit(item)} id="listbox-item-0" role="option" css={xw`flex flex-row items-center text-sm bg-gray-200 text-gray-600 cursor-pointer relative py-2 px-2 `}>
                       
                               <MdEdit /> &nbsp; Edit
                               </li>}
                               {item.status !== 'fulfilled' && <li onClick={()=> deleteOrder(item)} id="listbox-item-1" role="option" css={xw`flex flex-row items-center text-sm bg-red-200 text-red-600 cursor-pointer relative py-2 px-2 `}>
                        
                               <MdDeleteForever /> &nbsp; Delete
                            </li>}
                            {item.status !== 'fulfilled' && <li id="listbox-item-2" role="option" css={xw`flex flex-row items-center text-sm bg-yellow-200 text-yellow-600 cursor-pointer relative py-2 px-2 `}>
                            
                               <BiCalendarEdit /> &nbsp; Change Date
                        </li>}
                    </ul>
          </div>
          </div>}
            </>
        )
    }

    function DisplayItems(item){

        
        return (
                item.products.length === 1 ? <div css={xw`flex items-center`}>
                                    <div css={xw`flex-shrink-0 h-10 w-10 rounded-full`}>
                                        <Image width={40} height={40} css={xw`rounded-full`} src="/images/bird.jpeg" alt="" />
                                    </div>
                                    <div css={xw`ml-4`}>
                                        <div css={xw`text-sm font-medium text-gray-900`}>
                                        {item.products[0].product}
                                        </div>
                                        <div css={xw`text-sm text-gray-500`}>
                                        {item.products[0].code}
                                        </div>
                                        <div css={xw`text-sm text-gray-500`}>
                                            X&nbsp;{item.products[0].quantity}
                                        </div>
                                    </div>
                                </div> : <>
                                <span onClick={()=> {setProd(!showProd); setProdId(item.id)}} css={xw`p-2 bg-gray-200 cursor-pointer text-gray-700 text-sm rounded-md`}>
                                    view products
                                </span>
                                {showProd && item.id == prodId && <div css={xw`relative`}>
                                <div css={xw`absolute whitespace-nowrap mt-1 z-10 rounded-md bg-white shadow-lg`}>
                                <ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" css={xw`max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}>
                                 
                                {item.products.map((prod) => {
                                    return (<li key={prod.code} id="listbox-item-0" role="option" css={xw`flex cursor-default relative py-2 pl-3 pr-9`}>
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
                                    <div css={xw`text-sm text-gray-400`}>
                                            X&nbsp;{prod.quantity}
                                        </div>
                                        
                                    </span>
                                </li>)
                                })}
                                </ul>
                                </div>
                                </div>}
                                </>
        )
    }


    return(
        <div css={xw`block overflow-y-scroll w-full `}>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={switchModal}
            style={customStyles}
            // css={xw`bg-gray-100`}
            contentLabel={`Edit Order`}>
            <div css={xw`flex flex-row justify-between cursor-pointer px-3 text-lg text-gray-500`} ><div css={xw`text-xl text-navy font-semibold`}>Edit Order</div> <IoMdCloseCircle onClick={() =>switchModal()} /></div>
            { <EditItems order={currItem} currRoute={'Order'}/>}
            </Modal>
            {dashDetails.map((item) => {
                return (
                    <div key={item.id} css={xw`flex flex-row bg-white rounded-md p-2 mx-6 md:mx-0 px-4 md:px-8 my-3`}>
                        <div css={xw`grid grid-cols-3 lg:grid-cols-4 gap-2 place-items-start w-full`}>
                           
                            <div css={xw`p-1 text-yellow-500 rounded-md text-sm `}>
                                {item.delivery_date}
                            </div>
                            <div css={xw`text-lg text-gray-800`}>
                                {item.receiver}
                            </div>
                            <div css={xw`place-self-center`}>
                                <p css={xw`text-green-600 p-1 bg-green-100 rounded-md`}>{item.total}<span css={xw`text-xs font-bold`}>MAD</span></p>
                
                            </div>
                            <div css={xw`place-self-center`}>
                            <TimeAgo css={xw`text-sm text-gray-400`}
                                datetime={item.date_created}
                                locale='en'
                                />
                            </div>
                            <div>
                                {DisplayItems(item)}

                            </div>
                            <div css={xw`break-all text-sm self-center items-center flex flex-row text-gray-500`}>
                                <MdLocationOn /> &nbsp;<p>{item.address}</p>
                            </div>
                            <div css={xw`place-self-center text-sm self-center items-center flex flex-row text-gray-500`}>
                                <MdLocationCity />&nbsp; <p>{item.city}</p>
                            </div>
                            <div css={xw`flex flex-row place-self-center items-center self-center text-sm text-gray-700`}>
                                {statusColor(item.status)}
                            </div>
                           
                            <div css={xw`break-all text-sm text-gray-500 self-center items-center`}>
                                LV{item.ordercode}
                            </div>
                            
                            <div css={xw`col-span-2 flex flex-row items-center self-center text-sm bg-green-800 text-white p-1 rounded-md`}>
                                <HiChatAlt /> &nbsp;{item.comment}
                            </div >
                            <div css={xw`place-self-center`}>
                                {DisplayOptions(item)}
                            </div>

                        </div>
                    </div>
                )
            })
        }
            
        </div>
        

    )
}

export default Orders;
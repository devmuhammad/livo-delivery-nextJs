import React from 'react';
import xw, { cx } from 'xwind'
import { connect } from 'react-redux'
import {fetchUserReport} from "../../redux/actions"

import {BsCheckAll} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import {IoMdCash} from 'react-icons/io'
import DashTable from '../components/dashtable'

const Dashboard = () => {

    const [dashDetails, setDash] = React.useState({
        delivered: 43,
        pending: 72,
        earning: 2250,
        topCities:[
            {city:"Casablanca", num:49},
            {city:"Rabat", num:82},
            {city:"Agadir", num:63},
            {city:"Marrakech", num:43},
            {city:"El Jadida", num:24},
            {city:"Tamara", num:29},
            {city:"Tetouan", num:36},
            // {city:"Casablanca", num:59},
            // {city:"Casablanca", num:71},
        ],
        topSelling: [
            {  
                img:'/../assets/bird.jpeg',
                item:'Henna Wear',
                itemno:1872,
                delivered: 10,
                pending: 32,
                earning: 1050
            },
            {  
                img:'/../assets/bird.jpeg',
                item:'Henna Indigo',
                itemno:1902,
                delivered: 29,
                pending: 37,
                earning: 2900
            },
            {  
                img:'/../assets/bird.jpeg',
                item:'Henna White',
                itemno:1848,
                delivered: 29,
                pending: 22,
                earning: 1750
            },
            {  
                img:'/../assets/bird.jpeg',
                item:'Henna Red',
                itemno:1772,
                delivered: 7,
                pending: 19,
                earning: 350
            },
            {  
                img:'/../assets/bird.jpeg',
                item:'Henna Blue',
                itemno:1038,
                delivered: 91,
                pending: 12,
                earning: 4200
            }
        ]
    })


    function showTopCities() {
        return(
            dashDetails.topCities.map((city) => {
                return (
                    <div key={city.num} css={xw`flex flex-row bg-white justify-between p-3 mx-6 md:mx-0 px-4 md:px-8`}>
                        <span css={xw`text-lg font-medium text-gray-600`}>
                            {city.city}
                        </span>
                        <span css={xw`text-lg font-bold text-green-600`}>
                            {city.num}
                        </span>
                    </div>
                )
            })
        )
    }

    return(
        <div css={xw`block overflow-hidden`}>
            <div css={xw`grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-5 w-full`}>

                <div css={xw`flex items-center h-28 md:h-32 px-4 mx-4 md:mx-0 bg-white rounded-md md:px-8 justify-around`}>
                    <span css={xw` bg-green-700 rounded-full items-center p-4`}>
                        <BsCheckAll css={xw`text-4xl text-white`} />
                        
                    </span>
                    <div css={xw`flex flex-col items-center`}>
                            <span css={xw`text-lg font-medium text-gray-400`}>
                                Delivered
                            </span>
                            <span css={xw`text-3xl font-bold text-gray-800`}>
                                {dashDetails.delivered}
                            </span>
                    </div>
                </div>
                <div css={xw`flex items-center h-28 md:h-32 px-4 mx-4 md:mx-0 bg-white rounded-md md:px-8 justify-around`}>
                    <span css={xw` bg-yellow-500 rounded-full items-center p-4`}>
                            <BiTimeFive css={xw`text-4xl text-white`} />
                    </span>
                    <div css={xw`flex flex-col items-center`}>
                            <span css={xw`text-lg font-medium text-gray-400`}>
                                Pending
                            </span>
                            <span css={xw`text-3xl font-bold text-gray-800`}>
                                {dashDetails.pending}
                            </span>
                    </div>
                </div>
                <div css={xw`flex items-center h-28 md:h-32 px-4 mx-4 md:mx-0 bg-white rounded-md md:px-8 justify-around`}>
                    <span css={xw` bg-black rounded-full items-center p-4`}>
                            <IoMdCash css={xw`text-4xl text-white`} />
                    </span>
                    <div css={xw`flex flex-col items-center`}>
                            <span css={xw`text-lg font-medium text-gray-400`}>
                                Earning
                            </span>
                            <span css={xw`text-3xl font-bold text-gray-800`}>
                                {dashDetails.earning}<span css={xw`text-sm font-extrabold`}>MAD</span>
                            </span>
                    </div>
                </div>
            </div>
            <div css={xw`grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 w-full mt-6 h-auto`}>

                <div css={xw`flex flex-col md:col-span-2 `}>
                    <span css={xw`text-black text-2xl font-semibold p-3`}>
                        Top 5 Selling Products
                    </span>
                    <div css={xw`bg-white w-full overflow-hidden`}> 
                        <DashTable topSelling={dashDetails.topSelling} />
                    </div>
                </div>

                <div css={xw`flex flex-col`}>
                    <span css={xw`text-black text-2xl font-semibold p-3`}>
                            Top Cities
                    </span>
                    <div css={xw`overflow-y-scroll h-96`}>
                    <div css={xw`grid grid-flow-row auto-rows-max gap-3 md:auto-rows-min`}>
                        { showTopCities()}
                    </div>
                    </div>
                </div>

            </div>
            
        </div>
        

    )
}

export default connect(
    mapStateToProps,
    {fetchUserReport}
)(Dashboard);
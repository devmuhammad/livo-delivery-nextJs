import React from 'react';
import xw, { cx } from 'xwind'
import {useDispatch, useSelector, shallowEqual} from "react-redux";

import {BsCheckAll} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import {IoMdCash} from 'react-icons/io'
import DashTable from '../components/dashtable'
import {getAllReports} from '../../redux/actions'


const Dashboard = () => {

    const dispatch = useDispatch()

    const [dashDetails, setDashDet] = React.useState(useSelector((state) =>  state.dashboard.report_details, shallowEqual))

   
    // const [dashDetails, setDash] = React.useState(report)
    
    React.useEffect(() => {
        dispatch(getAllReports())
        dispatch({type: "FETCH_REPORT_BY_USER", userId:101})
        

    },[dashDetails])

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
            <div css={xw`grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 w-full mt-5`}>

                <div css={xw`flex flex-col md:col-span-2`}>
                    <span css={xw`text-black text-2xl font-semibold p-3`}>
                        Top 5 Selling Products
                    </span>
                    <div css={xw`bg-white w-full overflow-x-hidden overflow-y-scroll h-96`}> 
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

export default Dashboard;
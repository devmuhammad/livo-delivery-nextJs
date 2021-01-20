import React from 'react';
import xw, { cx } from 'xwind'
import Image from 'next/image'

const DashTable = ({topSelling}) => {


    function showRows (){
        return( topSelling.map((sales) => { 
            
        return ( <tr key={sales.itemno}>
          <td css={xw`px-6 py-4 whitespace-nowrap`}>
            <div css={xw`flex items-center`}>
              <div css={xw`flex-shrink-0 h-10 w-10 rounded-full`}>
                <Image width={40} height={40} css={xw`rounded-full`} src="/images/bird.jpeg" alt="" />
              </div>
              <div css={xw`ml-4`}>
                <div css={xw`text-sm font-medium text-gray-900`}>
                  {sales.item}
                </div>
                <div css={xw`text-sm text-gray-500`}>
                  {sales.itemno}
                </div>
              </div>
            </div>
          </td>
          <td css={xw`px-6 py-4 whitespace-nowrap`}>
          {/* <span css={xw`px-2 inline-flex text-lg leading-5 font-semibold rounded-full bg-yellow-200 text-yellow-800`}>
                {sales.pending}
                </span> */}
            <div css={xw`text-lg text-green-700 font-bold`}>{sales.delivered}</div>
          </td>
          <td css={xw`px-6 py-4 whitespace-nowrap text-lg justify-center text-yellow-500`}>
              {sales.pending}
          </td>
          <td css={xw`px-6 py-4 whitespace-nowrap text-lg text-gray-800`}>
            {sales.earning}
          </td>
          
        </tr>
        )}
        ))
    }


    return (

        <div css={xw`flex flex-col w-full`}>
  <div css={xw`-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 overflow-y-auto`}>
    <div css={xw`py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8`}>
      <div css={xw`shadow overflow-hidden border-b border-gray-200 sm:rounded-lg`}>
        <table css={xw`min-w-full divide-y divide-gray-200`}>
          <thead css={xw`bg-gray-50`}>
            <tr>
              <th scope="col" css={xw`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                Item
              </th>
              <th scope="col" css={xw`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                Delivered
              </th>
              <th scope="col" css={xw`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                Pending
              </th>
              <th scope="col" css={xw`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                Earnings
              </th>
              {/* <th scope="col" css={xw`relative px-6 py-3`}>
                <span css={xw`sr-only`}>Edit</span>
              </th> */}
            </tr>
          </thead>
          <tbody css={xw`bg-white divide-y divide-gray-200`}>
            {showRows()}

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}

export default DashTable
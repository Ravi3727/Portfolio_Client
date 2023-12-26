import React from 'react'
import { useContext} from "react";
import { AppContext } from '../App';

function FbCard({rating , message}) {
    const { Mode } = useContext(AppContext);
  return (
    <div className='w-[300px] h-[200px] flex flex-col gap-2 bg-red-400 overflow-x-hidden overflow-y-auto mt-12 rounded-xl shadow-lg border-2 border-orange-500'style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'rgb(249, 115, 22)' : 'white' }} >
        <div className='mt-2 items-center lg:text-4xl text-xl font-bold leading-1.2 p-1 text-center'>
            {rating}
        </div>
        <div className='items-center text-sm leading-1.2 p-2 text-center'>
            {message}
        </div>
    </div>
  )
}

export default FbCard
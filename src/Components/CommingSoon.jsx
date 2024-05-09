import React from 'react';
import { useContext } from "react";
import { AppContext } from '../App';
function ComingSoonCard() {
    const { Mode } = useContext(AppContext);
    return (
        <div className=' justify-center lg:w-[350px] lg:h-[400px] w-[250px] h-[160px] border-1 rounded-lg items-center p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:-translate-x-1 duration-200 text-center mb-4 border-2 shadow-xl border-dotted' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>
            <h1 className='lg:text-3xl text-xl font-semibold leading-1.2 lg:mt-28 mt-6'>Coming Soon...</h1>
            <p className='lg:text-2xl text-lg font-semibold leading-1.2 lg:mt-4 mt-2'>This Time Something Big</p>
        </div>
    )
}

export default ComingSoonCard;
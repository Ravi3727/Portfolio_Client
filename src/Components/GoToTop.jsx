import React from 'react'
import { useContext } from "react";
import { SiHurriyetemlak } from "react-icons/si"
import { AppContext } from '../App';
function GoToTop() {
    const { Mode } = useContext(AppContext);
    const gototop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <div className='ml-[1200px] w-14 h-24 hover:scale-125 scroll-mb-16'>
            <div className='text-3xl border-2 border-orange-500 border-solid bg-orange-400 rounded-full  items-center p-2  ' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>
                <h1 onClick={gototop} className='ml-1 h-8'><SiHurriyetemlak /></h1>
            </div>
        </div>
    )
}

export default GoToTop;
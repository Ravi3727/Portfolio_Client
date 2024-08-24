import React from 'react'
import { useContext } from "react";
import { AppContext } from '../App';
import { AiOutlineGithub } from "react-icons/ai";
function ProjectThird({ title, description, imageUrl }) {
    const { Mode } = useContext(AppContext);
    const openLinkInNewWindow = () => {
        // Replace the URL with your desired link
        var link = "https://oj-sigma.vercel.app/";
        // Open the link in a new window
        window.open(link, "_blank");
    }
    const openLinkInNewWindow1 = () => {
        // Replace the URL with your desired link
        var link = "https://github.com/Ravi3727/OJ";
        // Open the link in a new window
        window.open(link, "_blank");
    }
    return (
        <>
            <div className=' justify-center lg:w-[300px] lg:h-[200px] w-[250px] h-[160px] border-1 rounded-lg items-center p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:-translate-x-1 duration-200 text-center mb-4' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>
                <div className="items-center group max-w-sm rounded overflow-hidden shadow-lg">
                    <button onClick={openLinkInNewWindow} className="transition transform  
    translate-y-8 ease-in-out invisible
    absolute group-hover:visible pr-10  
    pl-10 pt-2 pb-2 mt-16 lg:mt-20 mx-32 bg-orange-500  
    text-white group-hover:translate-y-0 -ml-[40px] rounded-md focus:outline-none">
                        Visit
                    </button>
                    <div className='flex flex-row gap-4 transition transform  
    translate-y-8 ease-in-out invisible
    absolute group-hover:visible pr-10  
    pl-10 pt-2 pb-2 mt-28 lg:mt-[132px] bg-orange-500  
    text-white group-hover:translate-y-0 rounded-md focus:outline-none lg:ml-[74px] ml-[30px] item-center text-center'>
                        <div>
                            <button onClick={openLinkInNewWindow1} className="">
                                Github
                            </button>
                        </div>
                        <div className='mt-1'>
                            <AiOutlineGithub />
                        </div>
                    </div>
                    <img className="w-full lg:h-[200px] h-[120px] visible" src={imageUrl} alt="image" />
                    <div className="px-6 py-4 max-w-full group-hover:filter group-hover:blur-[2px]" style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)' }}>
                        <div className="lg:font-bold font:semibold lg:text-xl text-lg mb-2 lg:h-[80px] h-[48px]" style={{ color: Mode ? 'black' : 'white' }}>
                            {title}
                        </div>
                        <p className="text-gray-500 lg:text-base text-sm ">{description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectThird
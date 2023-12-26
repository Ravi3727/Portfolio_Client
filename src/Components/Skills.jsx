import React from 'react'
import { useContext } from "react";
import { AppContext } from '../App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Skills.css";
// import { motion } from "framer-motion"
AOS.init();

function Skills() {
    const { Mode } = useContext(AppContext);
    return (
        <div id="Skills" className='w-full h-full lg:mt-4' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>
            <div className='w-[90%]  h-[2px] bg-yellow-400 mt-8 lg:float-right mx-auto lg:mb-12 '>
            </div>
            <div className='group lg:text-7xl text-5xl font-extrabold h-28  flex flex-col gap-4  w-full items-center mt-14'>
                <h1 className='w-full flex items-center justify-center'> My Skills</h1>
                <div className='flex items-center justify-center lg:w-[300px] w-[170px] h-[3.5px] bg-yellow-400 opacity-0 group-hover:opacity-100'></div>
            </div>

            <div className='flex lg:flex-row flex-col  w-[80%] lg:mt-10 lg:ml-[200px] h-[80vh] mb-10 p-6 ml-12 '>

                <div className='flex flex-col justify-start items-start lg:gap-10 gap-8 w-full'>

                    <div  className='text-2xl text-start font-semibold  p-2'>
                        <label htmlFor="HTML">TailwindCSS</label>
                        <span className=' p-1 rounded-full border-yellow-400 percent ml-[75px] mb-1 text-lg bg-inherit text-yellow-400'>95%</span>
                        <div className='level'></div>
                    </div>

                    <div className='text-2xl text-start font-semibold  p-2'>
                        <label htmlFor="HTML">JavaScript</label>
                        <span className=' p-1 rounded-full border-yellow-400 percent ml-[75px] mb-1 text-lg bg-inherit text-yellow-400'>95%</span>
                        <div className='level'></div>
                    </div>

                    <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">TypeScript</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[40px] mb-1 text-lg bg-inherit text-yellow-400'>70%</span>
                        <div className='level1 '></div></div>

                    <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">React</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[110px] mb-1 text-lg bg-inherit text-yellow-400'>75%</span>
                        <div className='level2'></div></div>

                    <div  className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">NodeJs</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[50px] mb-1 text-lg bg-inherit text-yellow-400'>60%</span>
                        <div className='level3'></div></div>
                </div>

                <div className='flex flex-col gap-8 justify-start items-start lg:gap-10 w-[50%]'>
                    <div  className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">C</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[155px] mb-1 text-lg bg-inherit text-yellow-400'>90%</span>
                        <div className='level4 '></div></div>

                    <div  className='text-2xl text-start font-semibold p-2 '>
                        <label htmlFor="HTML">C++</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[151px] mb-1 text-lg bg-inherit text-yellow-400'>95%</span>
                        <div className='level5 '></div></div>

                    <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">Java</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[135px] mb-1 text-lg bg-inherit text-yellow-400'>90%</span>
                        <div className='level6  '></div></div>

                        <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">Python</label><span className='p-1 rounded-full border-yellow-400 percent ml-[80px] mb-1 text-lg bg-inherit text-yellow-400'>70%</span>
                        <div className='level1'></div></div>

                    <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">DSA</label><span className='p-1 rounded-full border-yellow-400 percent ml-[50px] mb-1 text-lg bg-inherit text-yellow-400'>50%</span>
                        <div className='level7'></div></div>
                        
                </div>

            </div>
        </div>
    )
}

export default Skills;
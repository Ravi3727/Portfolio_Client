import React from 'react'
import { useContext } from "react";
import { AppContext } from '../App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Skills.css";
import cohortImage from "../assets/Cohort_2_0.png"
// import { motion } from "framer-motion"
AOS.init();

function Skills() {
    const { Mode } = useContext(AppContext);
    return (
        <div id="Skills" className='w-full h-screen overflow-y-auto overflow-x-hidden lg:mt-4 flex justify-evenly flex-col gap-4' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>
            <div className='w-[90%] border-2 border-yellow-400 mt-8 lg:float-right mx-auto lg:mb-2 '>
            </div>
            <div className='group lg:text-7xl text-5xl font-extrabold h-28  flex flex-col gap-4  w-full items-center mt-14'>
                <h1 className='w-full flex items-center justify-center'> My Skills</h1>
                <div className='flex items-center justify-center lg:w-[300px] w-[170px] h-[3.5px] bg-yellow-400 opacity-0 group-hover:opacity-100'></div>
            </div>

            <div className='flex lg:flex-row flex-col  w-[80%] lg:mt-10 lg:ml-[200px] h-[80vh] mb-10 p-6 ml-12 '>

                <div className='flex flex-col justify-start items-start lg:gap-10 gap-8 w-full'>

                    <div className='text-2xl text-start font-semibold  p-2'>
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
                        <label htmlFor="HTML">React.js/Next.js</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[50px] mb-1 text-lg bg-inherit text-yellow-400'>75%</span>
                        <div className='level2'></div></div>

                    <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">Node.js</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[110px] mb-1 text-lg bg-inherit text-yellow-400'>75%</span>
                        <div className='level2'></div></div>

                    <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">Docker</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[50px] mb-1 text-lg bg-inherit text-yellow-400'>60%</span>
                        <div className='level3'></div></div>
                </div>

                <div className='flex flex-col gap-8 justify-start items-start lg:gap-10 w-[50%]'>
                    <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">C</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[155px] mb-1 text-lg bg-inherit text-yellow-400'>90%</span>
                        <div className='level4 '></div></div>

                    <div className='text-2xl text-start font-semibold p-2 '>
                        <label htmlFor="HTML">C++</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[151px] mb-1 text-lg bg-inherit text-yellow-400'>95%</span>
                        <div className='level5 '></div></div>

                    <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">Java</label><span className=' p-1 rounded-full border-yellow-400 percent ml-[135px] mb-1 text-lg bg-inherit text-yellow-400'>70%</span>
                        <div className='level1'></div></div>

                    {/* <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">Python</label><span className='p-1 rounded-full border-yellow-400 percent ml-[80px] mb-1 text-lg bg-inherit text-yellow-400'>70%</span>
                        <div className='level1'></div></div> */}

                    <div className='text-2xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">DSA</label><span className='p-1 rounded-full border-yellow-400 percent ml-[10px] mb-1 text-lg bg-inherit text-yellow-400'>Solved 300+ questions</span>
                        <div className='level9'></div></div>

                    <div className='text-xl text-start font-semibold p-2'>
                        <label htmlFor="HTML">Scaling Backends</label><span className='p-1 rounded-full border-yellow-400 percent ml-[10px] mb-1 text-lg bg-inherit text-yellow-400'>Learning...</span>
                        <div className='level8'></div></div>

                </div>


            </div>
            <div className='w-full p-2  h-full mb-4 mt-52 lg:mt-10 gap-10 flex flex-col justify-evenly'>
                <h1 className='text-orange-500 font-bold text-3xl mx-auto'>Curently learning </h1>
                <div className='flex lg:flex-row gap-6 justify-evenly mx-auto'>
                    <div className='w-1/2'>
                        <div className='text-lg font-semibold leading-relaxed'>
                            Scaling Backends <span>from Cohort 2.0 by <a className="text-orange-500 underline font-light" href="https://www.youtube.com/@harkirat1">Harkirat Singh</a></span>
                        </div>
                        <div className='text-lg leading-8 text-yellow-300'>
                            Currently I am learning Kubernetes,
                        </div>
                        <div>
                            <h1 className='text-lg text-orange-500'>Completed</h1>
                            <p>
                                <ul>
                                    <li>Messages queues and PubSubs,</li>
                                    <li>Advanced DB concepts,</li>
                                    <li>Captchas and DDos Protections,</li>
                                    <li>Load Balancers,</li>
                                    <li>Testing Node.js Apps,</li>
                                    <li>Reat time communication, basics of WebRTC,</li>
                                    <li>Docker Deep Dive,</li>
                                    <li>Container orchestration, Docker searm,</li>
                                    <li>CI/CD pipelines,</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='w-1/2 gap-2 flex flex-col '>
                        <div className='text-lg font-semibold leading-8 '>Syllabus of this cohort</div>
                        <div className='h-64 w-full rounded-xl'>
                            <img src={cohortImage} alt="Syllabus Image" className='w-68 h-64' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
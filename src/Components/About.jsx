import React from 'react'
import About1 from "../assets/AboutMe.svg";
import { useContext } from "react";
import { AppContext } from '../App';
import AOS from 'aos';
// import {useRef} from "react";
import 'aos/dist/aos.css';
AOS.init();
function About() {

    const { Mode } = useContext(AppContext);
    return (
        <div className='lg:w-full lg:h-full mt-10 mr-4' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>
            <div className='w-[90%] mx-auto h-[2px] bg-yellow-400 lg:float-right'>
            </div>
            <div className='flex lg:flex-row flex-col items-center justify-center lg:w-full  mt-24 mb-16 p-2 '>


                {/* Image */}
                <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='lg:mr-12 lg:mt-20 mt-2'>
                    {/* porfolio image */}
                    <img src={About1} alt='avatar' className='lg:w-full lg:ml-24 w-[360px] ' />
                </div>

                {/* content */}
                {/* data-aos="fade-right" */}
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='flex flex-col lg:w-[60%] w-[90%] gap-7 items-start p-2 justify-between mt-14 lg:ml-24 '>
                    <h1 className='w-full lg:text-6xl text-4xl font-extrabold leading-44 lg:ml-0 items-center flex justify-center '>About Me...</h1>
                    <div className='lg:items-start lg:text-start items-center text-center'>
                        I&apos;m an enthusiastic B.Tech student at
                        <span className='font-semibold text-orange-500'>DTU</span>
                        (Delhi Technological University) specializing in
                        <span className='font-semibold text-orange-500'>MAC</span>
                        (Mathematics and Computing). Proficient in
                        <span className='font-semibold text-orange-500'>MERN stack, Next.js, TypeScript, C, C++, Python, Go, and Java</span>,
                        I enjoy solving complex problems and building innovative solutions.

                        Recently, I&apos;ve delved into
                        <span className='font-semibold text-orange-500'>machine learning, AI, and data science</span>,
                        completing projects involving
                        <span className='font-semibold text-orange-500'>LLMs, deep learning algorithms, and computer vision</span>.
                        My portfolio includes a
                        <span className='font-semibold text-orange-500'>Code Judge platform</span>, a
                        <span className='font-semibold text-orange-500'>2048 game</span>, and
                        <span className='font-semibold text-orange-500'>LinkVault</span>—a platform for saving and sharing links effortlessly.

                        Currently, I&apos;m honing my expertise in
                        <span className='font-semibold text-orange-500'>AI and scalable web solutions</span>,
                        actively contributing to projects that merge creativity with technology. Hackathons, coding competitions, and exploring
                        <span className='font-semibold text-orange-500'>cutting-edge trends</span> fuel my passion for continuous learning.
                        Let&apos;s collaborate and create something
                        <span className='font-semibold text-orange-500'>impactful</span>!
                    </div>

                </div>

            </div>
        </div>
    )
}
export default About;
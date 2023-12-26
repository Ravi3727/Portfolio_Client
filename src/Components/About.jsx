import React from 'react'
import About1 from "../assets/About Me.svg";
import { useContext } from "react";
import { AppContext } from '../App';
import AOS from 'aos';
// import {useRef} from "react";
import 'aos/dist/aos.css'; 
AOS.init();
function About() {

    const { Mode } = useContext(AppContext);
    return (
        <div  className='lg:w-full lg:h-full mt-10 mr-4' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>
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
                        Enthusiastic B.Tech student from <span className='font-semibold text-orange-500'>DTU</span> (DELHI TECNOLOGICAL UNIVERSITY) specializing in <span className='font-semibold text-orange-500'>MAC</span> (Mathematics And Computing). Proficient in <span className='font-semibold text-orange-500'>MERN stack, Next.js, TypeScript C, C++, and Java for DSA</span> . A passionate developer, I thrive on problem-solving and love crafting innovative solutions. Collaborating with like-minded individuals excites me, as it brings out the best in our creations. With a growth-oriented mindset, I actively participate in hackathons and coding competitions. Exploring the latest tech trends keeps me ahead of the curve. My goal is to make a positive impact through technology, creating dynamic web applications that leave a lasting impression. Open to exciting opportunities, let's collaborate and build something extraordinary together!
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About;
import React from 'react'
import { useContext } from "react";
import { AppContext } from '../App';
import ProjectOne from './ProjectOne';
import CommingSoon from './CommingSoon';



function Project() {
    const { Mode } = useContext(AppContext);

    const cardData1 = {
        title: 'Todo With Calendar',
        description: 'Enhance your calendar experience with integrated to-dos—effortlessly manage tasks, deadlines, and priorities in one place.',
        imageUrl: "https://img.freepik.com/premium-photo/calendar-with-days-clock-wood-table_43314-1818.jpg",
      };
    return (
        <>
        <div className='w-full sm:flex-col justify-center items-center h-full lg:h-screen lg:overflow-hidden lg:mt-4'>

        
            <div className='w-[90%] h-[2px] bg-yellow-400 lg:float-right mt-6 mx-auto lg:ml-40'>
            </div>
            <div className=' flex flex-col gap-8 h-full items-center  lg:mt-60 mt-24 mb-4'>
                <div className='group lg:text-7xl text-5xl font-extrabold flex flex-col gap-4  w-full items-center'>
                    <h1 className='-mt-14 lg:-mt-28'>Projects</h1>
                    <div className=' lg:w-[300px] w-[170px] h-[3.5px] bg-yellow-400 opacity-0 group-hover:opacity-100'></div>
                </div>

                <div className='flex lg:flex-row flex-col  lg:gap-8 gap-40 h-full'>
                <div className='lg:mt-0 p-1 mt-6 rounded-lg flex lg:flex-row flex-col m-3 lg:m-0 justify-evenly lg:gap-10 h-full '>
                    <ProjectOne {...cardData1}/>
                </div>
                <div className='lg:mt-0 p-1 mt-6 rounded-lg flex lg:flex-row flex-col m-3 lg:m-0 justify-evenly lg:gap-10 h-full'>
                    <CommingSoon/>
                </div>

                </div>
                
            </div>
            </div>
        </>
    )
}

export default Project


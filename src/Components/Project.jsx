import React from 'react'
import ProjectOne from './ProjectOne';
// import CommingSoon from './CommingSoon';
import Dashboard_Image from "../assets/Payment_dashboard.png";
import ProjectSecond from './ProjectSecond';
import ProjectThird from './ProjectThird';
import ProblemTable from "../assets/ProblemTable.png"


function Project() {

    const cardData1 = {
        title: 'Todo With Calendar',
        description: 'Enhance your calendar experience with integrated to-dos—effortlessly manage tasks, deadlines, and priorities in one place.',
        imageUrl: "https://img.freepik.com/premium-photo/calendar-with-days-clock-wood-table_43314-1818.jpg",
    };
    const cardData2 = {
        title: 'Payment Dashboard UI',
        description: 'A simple and clean dashboard of payments with side navigation bar',
        imageUrl: Dashboard_Image,
    };
    const cardData3 = {
        title: 'The Online Code Judge',
        description: 'Master the art of problem solving',
        imageUrl: ProblemTable,
    };
    return (
        <>
            <div className='w-full sm:flex-col justify-center items-center h-full lg:h-screen lg:overflow-hidden lg:mt-4'>


                <div className='w-[90%] h-[2px] bg-yellow-400 lg:float-right mt-6 mx-auto lg:ml-40'>
                </div>
                <div className=' flex flex-col gap-8 h-full items-center lg:mt-60 mt-24 mb-4'>
                    <div className='group lg:text-7xl text-5xl font-extrabold flex flex-col gap-4  w-full items-center'>
                        <h1 className='-mt-14 lg:-mt-28'>Projects</h1>
                        <div className=' lg:w-[300px] w-[170px] h-[3.5px] bg-yellow-400 opacity-0 group-hover:opacity-100'></div>
                    </div>

                    <div className='grid grid-col-1 lg:grid-cols-3 gap-4 h-full overflow-y-auto'>
                    <div className=' rounded-lg  '>
                            <ProjectThird {...cardData3} />
                        </div>
                        <div className='rounded-lg '>
                            <ProjectSecond {...cardData2} />
                        </div>
                       
                        <div className=' rounded-lg'>
                            <ProjectOne {...cardData1} />
                        </div>
                        
                    </div>

                    

                </div>
            </div>
        </>
    )
}

export default Project


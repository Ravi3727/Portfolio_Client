import React from 'react'
import ProjectOne from './ProjectOne';
// import CommingSoon from './CommingSoon';
import game from "../assets/2048.jpg";
import ProjectSecond from './ProjectSecond';
import ProjectThird from './ProjectThird';
import ProblemTable from "../assets/dsa.jpg"
import linkPhoto from "../assets/linkVault.jpg"


function Project() {

    const cardData1 = {
        title: 'LinkVault',
        description: 'A user-friendly platform to save and share your links effortlessly with a single click.',
        imageUrl: linkPhoto,
    };
    const cardData2 = {
        title: 'Let\'s make 2048',
        description: 'A fun and strategic puzzle game where players merge numbered tiles to reach the "2048" tile. It combines simplicity with addictive gameplay, perfect for sharpening problem-solving skills',
        imageUrl: game,
    };
    const cardData3 = {
        title: 'The Online Code Judge',
        description: 'A distraction-free platform for practicing DSA, solving coding challenges, and participating in contests with admin-controlled problem creation',
        imageUrl: ProblemTable,
    };
    return (
        <>
            <div className='w-full sm:flex-col justify-center items-center h-full lg:h-screen lg:overflow-hidden lg:mt-4'>


                <div className='w-full h-[2px] bg-yellow-400 lg:float-right mt-6 mx-auto lg:ml-40'>
                </div>
                <div className=' flex flex-col gap-8 h-full items-center lg:mt-60 mt-24'>
                    <div className='group lg:text-7xl text-5xl font-extrabold flex flex-col gap-4  w-full items-center'>
                        <h1 className='-mt-14 lg:-mt-28'>Projects</h1>
                        <div className=' lg:w-[300px] w-[170px] h-[3.5px] bg-yellow-400'></div>
                    </div>

                    <div className='w-full lg:w-11/12 ml-24 lg:ml-0 grid grid-col-1 lg:grid-cols-3 gap-48 lg:gap-28 min-h-screen lg:h-full overflow-y-auto '>
                    <div className=' rounded-lg min-h-full '>
                            <ProjectThird {...cardData3} />
                        </div>
                        <div className='rounded-lg min-h-full mb-10'>
                            <ProjectSecond {...cardData2} />
                        </div>
                       
                        <div className=' rounded-lg min-h-full mb-6'>
                            <ProjectOne {...cardData1} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project


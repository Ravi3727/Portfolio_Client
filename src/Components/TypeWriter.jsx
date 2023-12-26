import React from 'react'
import Typewrite from "typewriter-effect";

function TypeWriter() {
  return (
    <div className='lg:text-4xl  text-3xl text-orange-500 font-semibold leading-60'>
        <Typewrite
        options={{
            autoStart: true,
            loop: true,
                        delay: 40,
                        strings: [
                         "Mern Stack Developer",
                         "DSA In C++",
                         "DSA In C",
                         "DSA In Java",
                         "I love listening podcasts",
                        ],
        }}/>
    </div>
  )
}

export default TypeWriter;
import React from 'react';
import TypeWriter from "./TypeWriter";
import { useContext} from "react";
import { AppContext } from '../App';
import { BsDownload } from "react-icons/bs";
import { AiOutlineInstagram} from "react-icons/ai";
import { AiOutlineGithub} from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import {AiOutlineMail } from "react-icons/ai";
import AOS from 'aos';
import { Link } from "react-router-dom";
import Myimage from '../assets/myPic.png';
import 'aos/dist/aos.css';
AOS.init();

// Fetch Profile Image from cloudinary server
// const API = "https://ravikant.onrender.com/ravi/v1/getProfileImages";
// const API = "http://localhost:3000/ravi/v1/getProfileImages";

function HeroSection() {

  const { Mode } = useContext(AppContext);
  // const [profile, setProfile] = useState([]);

  // const fetchProfileImages = async (url) => {

  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProfile(data.data[0].imageUrl);
  //     console.log(profile[0].imageUrl);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchProfileImages(API);
  // });


  return (
    <div id="Home" className='justify-center mt-8 mb-8 w-full h-[100vh] overflow-x-hidden' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>
      <div className='w-[90%]  h-[2px] bg-yellow-400 mx-auto lg:mr-0 mt-2 mb-4 lg:float-right'>
      </div>
      <div className='flex-col-reverse flex lg:flex-row justify-between items-center lg:max-w-[90%] w-full lg:text-start text-center float-right lg:mt-16  p-2 gap-10  border-black -mt-8 overflow-x-hidden'>

        {/* content */}
        <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" className='flex flex-col w-full h-full  border-1 lg:items-start items-center p-2 gap-2 mt-6  border-black lg:mr-20 mr-0 '>
          <h1 className='lg:text-6xl text-2xl lg:mt-4  font-extrabold h-12 '>Hi There !</h1>
          <h1 className='lg:text-6xl text-2xl lg:mt-10 font-extrabold h-12'>I Am Ravi</h1>
          <div className='items-start h-12 lg:ml-0 ml-2 lg:mt-10 mt-2 text-xl lg:text-2xl mb-3 lg:mb-0'>
            <TypeWriter />
          </div>
          <h1 className='lg:text-2xl text-lg lg:mt-4 mt-2 mb-4 lg:mb-0 font-semibold h-6'>Currently I Am Learning Data Science</h1>

          <div className='flex gap-4 justify-center items-center lg:mb-12 lg:h-28 mt-6 flex-wrap'>
            <Link to="/connect">
              <button className=' hover:scale-110 transition-transform duration-2000 w-32 lg:w-40 h-10 bg-orange-400 rounded-lg border-1 border-solid text-white hover:bg-orange-500 text-xl'>Connect</button></Link>
            <button className='hover:scale-110 transition-transform duration-2000 w-32 lg:w-40 h-10 bg-orange-400 rounded-lg border-1 border-solid text-white hover:bg-orange-500 flex justify-evenly p-2 text-xl'>
              <div><a href="https://drive.google.com/file/d/1Dnkq_lUK-BM0dmTDlynuxDWh6ptN7ZPY/view?usp=sharing" target='blank'>Resume</a></div>
              <div className='mt-1'>
                <BsDownload />
              </div>
            </button>


          </div>
          <div className='flex gap-3 justify-center items-center flex-wrap lg:-mt-20 mt-7 lg:ml-0'>
            <div className='text-4xl lg:text-5xl  text-orange-400 hover:text-orange-500'><a href="https://www.linkedin.com/in/ravi-kant2705/" target='blank'><AiOutlineLinkedin/></a></div>
            <div className='text-4xl lg:text-5xl  text-orange-400 hover:text-orange-500'><a href="https://www.instagram.com/ravi2705_/"target='blank' ><AiOutlineInstagram/></a></div>             
            <div className='text-3xl  text-orange-400 hover:text-orange-500' ><a href="https://github.com/Ravi3727" target='blank'><AiOutlineGithub/></a></div>
            <div className='text-4xl lg:text-5xl  text-orange-400 hover:text-orange-500'><a href="mailto:rk3727000@gmail.com" target='blank'><AiOutlineMail/></a></div>
          </div>
        </div>

        {/* Image */}
        <div data-aos="zoom-out"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000" className=''>
          {/* porfolio image */}
          <img src={Myimage} alt='ar' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:-translate-x-1 duration-1000 border-1 border-collapse shadow-sm-light rounded-md lg:w-[400px] w-[230px] lg:h-[500px] h-[350px] lg:mr-60 lg:-ml-36 lg:mt-6 mt-20 overflow-y-hidden overflow-x-hidden'/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

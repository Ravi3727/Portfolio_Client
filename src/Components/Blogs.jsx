// import React from 'react'
import { useContext, useState, useEffect } from "react";
import { AppContext } from '../App';
import Images from "../Components/Images"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const API = "http://localhost:3000/ravi/v1/getAllImages";



function Blogs() {
  const { Mode } = useContext(AppContext);
  const [images, setImage] = useState([]);
  // const [imgUrl, setImgUrl] = useState([]);
  // const [imgSrc, setImgSrc] = useState([]);


  const fetchImages = async (url) => {

    try {
      const res = await fetch(url);
      const data = await res.json();
      setImage(data.data);
      // console.log(images);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchImages(API);
  }, []);

  return (
    <>
      <div id="Skills" className='w-full h-full mt-2' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>

        <div className='lg:w-[90%] w-[100%] h-[2px] bg-yellow-400 lg:float-right mb-8'>
        </div>

        <div className='h-full w-full items-center mt-2'>
          <ul className=''>
            <div className='flex items-center justify-evenly text-sm lg:text-xl leading-10  w-8/12 mx-auto lg:gap-0 gap-4'>

              <li className="">
                <Link to="/blogs/cpp">
                  <div className="group relative">
                    Cpp
                    <div className="w-[50px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400 -ml-1 mt-1"></div>
                  </div>
                </Link>
              </li>

              <li className="">
                <Link to="/blogs/java">
                  <div className="group relative">
                    Java
                    <div className="w-[50px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400  -ml-1 mt-1"></div>
                  </div>
                </Link>
              </li>

              <li className="">
                <Link to="/blogs/python">
                  <div className="group relative">
                    Python
                    <div className="w-[82px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400  -ml-1 mt-1"></div>
                  </div>
                </Link>
              </li>

              <li className="">
                <Link to="/blogs/javascript">
                  <div className="group relative">
                    Javascript
                    <div className="w-[108px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400  -ml-1 mt-1"></div>
                  </div>
                </Link>
              </li>

              <li className="">
                <Link to="/blogs/dsa">
                  <div className="group relative">
                    DSA
                    <div className="w-[56px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400  -ml-1 mt-1"></div>
                  </div>
                </Link>
              </li>
            </div>
          </ul>
        </div>

        <div data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"  className='w-10/12  flex flex-wrap mx-auto lg:mt-6 -mt-[600px] p-2 justify-evenly gap-3 h-full'>
          {images.length > 0 && (
            <Images images = {images}/>
          )}
        </div>
      </div>
    </>
  )
}

export default Blogs;
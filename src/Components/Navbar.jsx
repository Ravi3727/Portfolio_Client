import React, { useState } from "react";
import { TiAdjustBrightness } from "react-icons/ti";
import { PiMoonStarsBold } from "react-icons/pi";
import { BsXLg } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { AnimatePresence, motion } from "framer-motion";



function Navbar({ sendDataToParent }) {
    const [dataToSend, setDataToSend] = useState(false);
    const [checked, setChecked] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    sendDataToParent(dataToSend);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const clickHandler = () => {
        setChecked(!checked);
        setDataToSend(!dataToSend);
        sendDataToParent(!dataToSend);
    };

    return (
        <div
            className="rounded-t-lg h-24 item-center"
            style={{
                backgroundColor: checked ? "white" : "rgb(31 41 55)",
                color: checked ? "black" : "white",
            }}
        >
            <div className="w-full border-1 border-solid rounded-t-lg">
                <div className="flex justify-between p-3 mt-8">

                    <div className="flex justify-between w-full">


                        <div className="">
                            <Link to="/">
                                <div className="md:text-4xl text-2xl font-extrabold mt-5 lg:ml-28 mr-40 hover:cursor-pointer hover:text-orange-500 hover:scale-110 transition-transform duration-2000">
                                    Ravikant
                                </div>{" "}
                            </Link>
                        </div>

                        {/* Hamburger Icon for Mobile Menu */}
                        <div className="lg:hidden ">
                            <div className="text-3xl font-extrabold mt-6" onClick={toggleMobileMenu}>
                                < CiMenuBurger />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {
                            mobileMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="z-10 fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0  border-b h-screen w-full"

                                >                                     <motion.div
                                     initial={{ scale: 0, opacity: 0 }}
                                     animate={{ scale: 1, opacity: 1 }}
                                     transition={{
                                       type: "spring",
                                       stiffness: 220,
                                       damping: 15,
                                     }}
                                     className="w-screen rounded-xl bg-gradient-to-tr flex flex-col items-center h-full overflow-x-hidden -ml-5 -mt-10"

                                     style={{ backgroundColor: checked ? 'white' : 'rgb(31 41 55)', color: checked ? 'black' : 'white' }}>
                                        <Link to="/" onClick={closeMobileMenu}>
                                            <div className="mt-20 text-xl font-semibold my-2 hover:text-orange-500">
                                                Home
                                            </div>
                                        </Link>
                                        <Link to="/about" onClick={closeMobileMenu}>
                                            <div className="text-xl font-semibold my-2 hover:text-orange-500">
                                                About
                                            </div>
                                        </Link>
                                        <Link to="/projects" onClick={closeMobileMenu}>
                                            <div className="text-xl font-semibold my-2 hover:text-orange-500">
                                                Projects
                                            </div>
                                        </Link>
                                        <Link to="/skills" onClick={closeMobileMenu}>
                                            <div className="text-xl font-semibold my-2 hover:text-orange-500">
                                                Skills
                                            </div>
                                        </Link>
                                        <Link to="/connect" onClick={closeMobileMenu}>
                                            <div className="text-xl font-semibold my-2 hover:text-orange-500">
                                                Connect Me
                                            </div>
                                        </Link>
                                        <Link to="/admin" onClick={closeMobileMenu}>
                                            <div className="text-xl font-semibold my-2 hover:text-orange-500">
                                                Admin
                                            </div>
                                        </Link>

                                        <Link to="RateMe">
                                            <div className="hover:scale-110 transition-transform duration-2000 border-1 bg-orange-400 p-1 rounded-md text-white font-semibold flex flex-col hover:bg-orange-500 hover:cursor-pointer mt-2 w-28 text-xl text-center" onClick={closeMobileMenu}>
                                                <div>Rate Me</div>
                                                <div className="flex gap-1 ">
                                                    <div className="ml-1">
                                                        <BiSolidStar />
                                                    </div>
                                                    <div className="ml-2">
                                                        <BiSolidStar />
                                                    </div>
                                                    <div className="ml-2">
                                                        <BiSolidStarHalf />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                        </Link>

                                        <div className='mt-10 lg:w-20 hover:scale-110 transition-transform duration-2000'>
                                            <button className='text-4xl' onClick={clickHandler}>{checked ? <TiAdjustBrightness className='text-orange-500 hover:text-black' /> : <PiMoonStarsBold className='text-black hover:text-orange-500' />}</button></div>

                                        <div className="text-2xl font-extrabold mt-10 border-2 border-orange-300 rounded-full p-2 text-orange-300" onClick={toggleMobileMenu}><BsXLg /></div>
                                    </motion.div>
                                </motion.div>
                            )
                        }

                    </AnimatePresence>

                    {/* Regular Menu */}
                    <div className="hidden lg:flex mt-5">
                        <ul className="flex gap-5 font-semibold ">

                            <li className="mt-3">
                                <Link to="/">
                                    <div className="group relative">
                                        Home
                                        <div className="w-[58px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400 mt-1 -ml-1"></div>
                                    </div>
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to="/about">
                                    <div className="group relative">
                                        About
                                        <div className="w-[60px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400 mt-1 -ml-1"></div>
                                    </div>
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to="/projects">
                                    <div className="group relative">
                                        Projects
                                        <div className="w-[73px] h-[3px] absolute -ml-1 opacity-0
                                            group-hover:opacity-100 
                                            transition-opacity bg-yellow-400 mt-1"></div>
                                    </div>
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to="/skills">
                                    <div className="group relative">
                                        Skills
                                        <div className="w-[50px] h-[3px] absolute -ml-1 opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400 mt-1"></div>
                                    </div>
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to="/connect">
                                    <div className="group relative">
                                        Connect
                                        <div className="w-[70px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400 mt-1 "></div>
                                    </div>
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to="/admin">
                                    <div className="group relative w-60">
                                        Admin
                                        <div className="w-[57px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400 mt-1 "></div>
                                    </div>
                                </Link>
                            </li>

                            <li >

                                <Link to="RateMe">
                                    <div className="hover:scale-110 transition-transform duration-2000 border-1 bg-orange-400 p-1 rounded-md text-white font-semibold flex flex-col hover:bg-orange-500 hover:cursor-pointer text-sm w-20">
                                        <div>Rate Me</div>
                                        <div className="flex gap-1">
                                            <div>
                                                <BiSolidStar />
                                            </div>
                                            <div>
                                                <BiSolidStar />
                                            </div>
                                            <div>
                                                <BiSolidStarHalf />
                                            </div>
                                        </div>
                                    </div>{" "}
                                </Link>


                            </li>

                            <li className="mt-2">
                                <div className='lg:w-20 hover:scale-110 transition-transform duration-2000'>
                                    <button className='text-3xl' onClick={clickHandler}>{checked ? <TiAdjustBrightness className='text-orange-500 hover:text-black' /> : <PiMoonStarsBold className='text-black hover:text-orange-500' />}</button></div>
                            </li>

                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Navbar;

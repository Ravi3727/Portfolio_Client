import React from 'react'
import { BiSolidStar } from "react-icons/bi";
import { useState } from 'react';
import Axios from "axios";
import { AppContext } from '../App';
import { useContext } from "react";
import 'flowbite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spin from './Spin';


function RateUs() {


    const { Mode } = useContext(AppContext);
    // const {register,reset}= useForm();

    const [checked, setChecked] = useState(false);
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);

    const clickHandler = () => {
        if (checked) {
            setRating(rating - 1);
        } else {
            setRating(rating + 1);
        }
        setChecked(!checked);
    }
    const [checked1, setChecked1] = useState(false);
    const clickHandler1 = () => {
        if (checked1) {
            setRating(rating - 1);
        } else {
            setRating(rating + 1);
        }
        setChecked1(!checked1);
    }
    const [checked2, setChecked2] = useState(false);
    const clickHandler2 = () => {
        if (checked2) {
            setRating(rating - 1);
        } else {
            setRating(rating + 1);
        }
        setChecked2(!checked2);
    }
    const [checked3, setChecked3] = useState(false);
    const clickHandler3 = () => {
        if (checked3) {
            setRating(rating - 1);
        } else {
            setRating(rating + 1);
        }
        setChecked3(!checked3);

    }
    const [checked4, setChecked4] = useState(false);
    const clickHandler4 = () => {
        if (checked4) {
            setRating(rating - 1);
        } else {
            setRating(rating + 1);
        }
        setChecked4(!checked4);

    }
    const [message, setMessage] = useState('');

    let PostData1 = async (e) => {
        e.preventDefault();
        try {
            if (message.length > 0) {
                // alert("Feedback Sent Successfully");
                setLoading(true);
                await Axios.post("https://portfoli-server-3d31.onrender.com/ravi/v1/feedback", {
                    message, rating
                });
                setLoading(false);
                toast.success("Thank you for your feedback", {
                    position: "top-center"
                });
                setMessage("");
                if (checked) {
                    setChecked(!checked);
                }
                if (checked1) {
                    setChecked1(!checked1);
                }
                if (checked2) {
                    setChecked2(!checked2);
                }
                if (checked3) {
                    setChecked3(!checked3);
                }
                if (checked4) {
                    setChecked4(!checked4);
                }

            } else {

                toast.error('Please Fill All Fields', {
                    position: 'top-center',
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    function checkRating(ratings) {
        let gradeText;

        switch (ratings) {
            case 0:
                gradeText = "Empty 😞";
                break;
            case 1:
                gradeText = "Ok Ok 😋";

                break;
            case 2:
                gradeText = "Good 😊";

                break;
            case 3:
                gradeText = "Very Good 😀";

                break;
            case 4:
                gradeText = "Awesome 😍";
                break;
            case 5:
                gradeText = "Superb 🤩";
                break;
            default:
                gradeText = "Invalid day number"
                break;
        }

        return gradeText;
    }


    function checkRatingColor(ratings) {
        let colorName;

        switch (ratings) {
            case 0:
                colorName = "#ffcccb";
                break;
            case 1:
                colorName = "#90EE90";
                break;
            case 2:
                colorName = "#FF9529";
                break;
            case 3:
                colorName = " #FDCC0D"
                break;
            case 4:
                colorName = "#FFDF00"
                break;
            case 5:
                colorName = " #FFDF00"
                break;
            default:
                colorName = "red"
                break;
        }

        return colorName;
    }






    return (
        <>
            <div className='w-full overflow-x-hidden mt-3' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>

                <div className='w-[90%] mx-auto lg:float-right h-[2px] bg-yellow-400  mt-10 lg:-ml-36'>
                </div>


                {/* <Navbar/> */}
                <div className='group flex flex-col justify-center items-center w-full'>
                    <h1 className='lg:text-6xl text-5xl lg:mt-16 mt-10 text-center'>Give Your Feedback</h1>
                    <div className='h-[3px] lg:w-[600px] w-[200px] bg-yellow-400 rounded-lg shadow-b-3xl border-2 border-yellow-400 border-dashed mx-auto mt-2 -mb-16 lg:mb-0 opacity-0 group-hover:opacity-100 transition-opacity' ></div>
                </div>

                <div className='items-center h-screen justify-center flex flex-col lg:w-full lg:gap-16 w-full gap-12 flex-wrap'>

                    <form method="POST" className='flex flex-col gap-16 flex-wrap' onSubmit={PostData1}>

                        <div className='flex justify-center items-center gap-3 lg:gap-10 lg:text-4xl text-4xl lg:ml-0 flex-wrap'>
                            <div onClick={clickHandler} style={{ color: checked ? 'yellow' : 'gray' }} className=''>
                                < BiSolidStar />
                            </div>

                            <div onClick={clickHandler1} style={{ color: checked1 ? 'yellow' : 'gray' }} >
                                < BiSolidStar />
                            </div>

                            <div onClick={clickHandler2} style={{ color: checked2 ? 'yellow' : 'gray' }} >
                                < BiSolidStar />
                            </div>

                            <div onClick={clickHandler3} style={{ color: checked3 ? 'yellow' : 'gray' }} >
                                < BiSolidStar />
                            </div>

                            <div onClick={clickHandler4} style={{ color: checked4 ? 'yellow' : 'gray' }} >
                                < BiSolidStar />
                            </div>


                        </div >
                        <div className='flex-col justify-center items-center w-full '>

                            <div className='items-center flex justify-center'>
                                <p className='text-2xl font-semibold '
                                    style={{ color: checkRatingColor(rating) }}>{checkRating(rating)}</p></div>
                            <div className='mt-10'>
                                <textarea id="message" rows="6" className="block p-2.5 w-[350px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Write your thoughts here..." name="message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea></div>



                            <div className='w-66 mr-10 lg:w-44 lg:ml-14 h-16  flex justify-center items-center mt-10'>
                                <input type="submit" value="Submite" className='opacity-0' />
                                <button type="submit" className='border-2 bordr-solid border-yellow-400 p-1 font-semibold leading-70 bg-orange-400 hover:bg-orange-500 rounded-lg
                          h-12 shadow-xl lg:ml-0 w-40'>Submit</button>
                                <div>
                                    {loading && <Spin />}
                                </div>
                            </div>
                        </div>





                    </form>

                </div >
            </div>
            <ToastContainer />
        </>
    )
}

export default RateUs;
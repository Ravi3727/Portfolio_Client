import React from 'react'
import { useContext, useState } from "react";
import { AppContext } from '../App';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spin from './Spin';
import CmCard from './CmCard';
import FbCard from './FbCard';


function Admin() {
    const { Mode } = useContext(AppContext);
    const [password, setPassword] = useState('');
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    const [loading, setLoading] = useState(false);
    const [display, setDisplay] = useState(true);
    const [activeTab, setActiveTab] = useState('cm');
    const handleTabToggle = (tab,col) => {
        setActiveTab(tab);
        if(tab === 'cm'){
            setColor1(col);
            setColor2('white');
        }else{
            setColor2(col);
            setColor1('white');
        }
        
    };





    // const data = {
    //     email: "rk3727000@gmail.com",
    //     msg: "Hello kaha ho sare best h ye too Hello kaha ho sare best h ye tooHello kaha ho sare best h ye tooHello kaha ho sare best h ye too  h ye too Hello kaha ho sare best h ye tooHello kaha ho sare best h ye tooHello kaha ho sare best h ye tooh ye too Hello kaha ho sare best h ye tooHello kaha ho sare best h ye tooHello kaha ho sare best h ye tooh ye too Hello kaha ho sare best h ye tooHello kaha ho sare best h ye tooHello kaha ho sare best h ye too ",
    //     name: "Ravi"
    // };

    // const data1 = {
    //     rating: 5,
    //     message: "Hello kaha ho sare best h ye too Hello kaha ho sare best h ye tooHello kaha ho sare best h ye tooHello kaha ho sare best h ye too  h ye too Hello kaha ho sare best h ye tooHello kaha ho sare best h ye tooHello kaha ho sare best h ye tooh ye too Hello kaha ho sare best h ye tooHello kaha ho sare best h ye tooHello kaha ho sare best h ye tooh ye too Hello kaha ho sare best h ye tooHello kaha ho sare best h ye tooHello kaha ho sare best h ye too ",
    // };
    const [AllCmData, setAllCmData] = useState([]);
    const [AllFbData, setAllFbData] = useState([]);
    const sendKey = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (password) {
                const response = await Axios.post('https://portfoli-server-3d31.onrender.com/ravi/v1/admin', {
                    password
                });
                console.log(response);
                if (response.data.success === false) {
                    toast.error('Wrong Password', {
                        position: 'top-center',
                    });
                } else {
                    setPassword('');
                    setDisplay(false);
                    setAllCmData(response.data.data.cMData) ;
                    setAllFbData(response.data.data.fBData);
                }
            } else {
                toast.error('Enter Password', {
                    position: 'top-center',
                });
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <div className='w-[90%]  h-[2px] bg-yellow-400 mx-auto lg:mr-0 mt-8 lg:mt-8 mb-4 lg:float-right'>
            </div>
            <div
                style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>

                {
                    display && <form method="POST" onSubmit={sendKey} className='flex flex-col items-center gap-3 h-screen justify-center'>
                        <label htmlFor="admin" className='text-3xl leading-1.2 font-bold '>Enter Password</label>
                        <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" className='border-yellow-400 font-semibold text-2xl border-1 rounded-lg text-center text-black' placeholder='.....' />
                        <button type="submit" className='p-1 bg-orange-500 w-full leading-1.2 text-lg border-1 rounded-lg shadow-xl'>
                            Submit
                        </button>
                    </form>
                }
                {
                    loading && <div className='flex flex-col items-center gap-3 h-screen justify-center'>
                        <Spin />
                    </div>
                }
            </div>
            {
                (!loading && !display) &&
                <div className='flex flex-col lg:w-10/12 w-full justify-between mt-8' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>
                    <div className='flex flex-row justify-evenly w-full text-xl font-bold leading-1.2'>
                        <div className='group relative' onClick={() => handleTabToggle('cm','orange-500')}>
                            <h1 className={`text-${color1}`}>ConnectMe</h1>
                            <div className="w-[120px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400 mt-1 "></div>
                        </div>
                        <div className='group relative' onClick={() => handleTabToggle('fb','orange-500')}>
                            <h1 className={`text-${color2}`}>FeedBack</h1>
                            <div className="w-[105px] h-[3px] absolute opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400 mt-1 "></div>
                        </div>
                    </div>

                    {/* Content display */}
                    <div className='text-xl font-bold leading-1.2 p-2 h-screen overflow-x-hidden overflow-y-auto flex flex-wrap justify-evenly'>
                        {activeTab === 'cm' && AllCmData && AllCmData.length > 0 &&
                            AllCmData.map((item) => (
                                <CmCard name={item.name} email={item.email} msg={item.msg} key={item._id} />
                            ))
                        }

                        {activeTab === 'fb' && AllFbData && AllFbData.length > 0 &&
                            AllFbData.map((item) => (
                                <FbCard rating={item.rating} message={item.message} key={item._id} />
                            ))
                        }

                    </div>
                </div>
            }

            <ToastContainer />
        </>
    )
}

export default Admin
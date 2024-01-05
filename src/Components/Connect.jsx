import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import AOS from 'aos';
import Axios from 'axios';
import Connect1 from '../assets/Connect.svg';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import LoadingBar from 'react-top-loading-bar'
import Spin from './Spin';
AOS.init();

function Connect() {
    const { Mode } = useContext(AppContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    // const [loader,setLoader] = useState(true);

    useEffect(() => {
        AOS.refresh();
    }, []);

    const PostData = async (e) => {
        e.preventDefault();
        try {

        setLoading(true);
        if (name.length > 0 && msg.length > 0 && email.length > 0) {
                setLoading(true);
                await Axios.post('https://portfoli-server-3d31.onrender.com/ravi/v1/connectMe', {
                    name,
                    email,
                    msg,
                });
                setLoading(false);
                // setLoader(false);
                toast.success('Message Sent Successfully', {
                    position: 'top-center',
                });
                setEmail('');
                setMsg('');
                setName('');
            } else {

                toast.error('Please Fill All Fields', {
                    position: 'top-center',
                });
            }


        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>

            <div
                id="Connect"
                className="w-full h-full flex flex-col items-center py-10 lg:mt-3"
                style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}
            >
                <div className="w-[90%] h-[2px] bg-yellow-400 float-right lg:ml-36 "></div>
                <div className="w-[90%] h-screen lg:w-full flex lg:flex-row flex-reverse-col mt-8 overflow-x-hidden overflow-y-hidden justify-evenly mb-8">

                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        className="flex flex-col  justify-center items-center gap-4 p-2 text-center lg:text-left w-[600px] h-screen"
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold lg:ml-16">Let's Talk!</h1>
                        <p className="text-lg w-full lg:w-[360px] lg:ml-20">
                            To request a quote or want to meet up for collaboration, contact me directly or fill out the form, and I will get back to you soon...
                        </p>
                        <form method="POST" className="mt-6 lg:w-[50%]" onSubmit={PostData}>
                            <div className="mb-4">
                                <label className="font-semibold mb-2" htmlFor="Name">
                                    Your Name
                                </label>
                                <input
                                    className="w-full border-2 border-yellow-500 p-1 rounded-lg text-black font-semibold mt-2"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="font-semibold mb-2" htmlFor="Email">
                                    Email <span className="text-[12px] text-red-500">Please enter a valid email</span>
                                </label>
                                <input
                                    className="w-full border-2 border-yellow-500 p-1 rounded-lg text-black font-semibold mt-2"
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="font-semibold mb-2" htmlFor="Message">
                                    Your Message
                                </label>
                                <textarea
                                    name="msg"
                                    id="message"
                                    placeholder="Type your message here..."
                                    className="w-full border-2 border-yellow-500 rounded-lg p-1 text-black font-semibold mt-2"
                                    rows="4"
                                    cols="25"
                                    value={msg}
                                    onChange={(e) => {
                                        setMsg(e.target.value);
                                    }}
                                ></textarea>
                            </div>
                            <div className="text-start flex flex-row justify-evenly">
                                <button
                                    type="submit"
                                    className="w-[50%] lg:h-12 py-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg"
                                >
                                    SEND MESSAGE
                                </button>
                                {loading && <Spin/>}
                            </div>
                        </form>

                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="mt-8 lg:w-[500px]"
                    >
                        <img src={Connect1} alt="" />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Connect;

import { useState, createContext } from 'react';
import './App.css';
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Connect from "./Components/Connect";
import Skills from './Components/Skills';
import RateMe from './Components/RateMe';
import Project from './Components/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';



export const AppContext = createContext();

function App() {



  const [Mode, setMode] = useState(null);
  const handelDataFromNavbar = (data) => {
    setMode(data);
  };

  return (
    <AppContext.Provider value={{ Mode, setMode }}>

      <div className='overflow-x-hidden lg:w-10/12 w-full h-full lg:ml-32 lg:mb-4 lg:overflow-y-hidden'>
        <div className=' w-full h-full  bg-white shadow-lg lg:rounded-lg lg:mt-12 lg:mb-12 overflow-x-hidden lg:overflow-y-hidden items-center justify-center flex flex-col ' style={{ backgroundColor: Mode ? 'white' : 'rgb(31 41 55)', color: Mode ? 'black' : 'white' }}>

          <Router>
            <Navbar sendDataToParent={handelDataFromNavbar} />
            <Routes>
              <Route exact path="/" element={<HeroSection />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/connect" element={<Connect />} />
              <Route exact path="/Skills" element={<Skills />} />
              <Route exact path="/projects" element={<Project />} />
              <Route exact path="/rateme" element={<RateMe />} />
              <Route exact path="/admin" element={<Admin />} />
            </Routes>
          </Router>
          <div className='hide-on-mobile'>
            <About />
            <Skills />
            <Project />
            <Connect />
            <RateMe />
          </div>

        </div>
      </div>

    </AppContext.Provider>

  );
}

export default App;
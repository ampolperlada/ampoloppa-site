import React from 'react';
import Navbar from './components/Navbar';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './App.css';
import Home from './components/pages/Home';
import Abouts from './components/pages/About.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skillz from './components/skillz.jsx';
import Workexp from './components/Workexp.jsx';
import AnimationTitle from './components/AnimationTitle.jsx';
import Contact from './components/Contactme.jsx';
import Education from './components/Education.jsx';

// ADD THESE NEW IMPORTS
import WorkExperience from './components/WorkExperience.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          
          {/* ADD WorkExperience and Projects to the About page */}
          <Route path='/about' element={
            <>
              <Abouts /> 
              <WorkExperience />  {/* NEW - Work experience cards */}
              <Projects />        {/* NEW - Project cards */}
              <Education /> 
              <Contact />
            </>
          }></Route>
          
          <Route path='/skills' element={
            <>
              <AnimationTitle /> 
              <Skillz />
              <Workexp />
            </>
          }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
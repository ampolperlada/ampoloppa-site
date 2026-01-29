import React from 'react';
import Navbar from './components/Navbar';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './App.css';
import Home from './components/pages/Home';
import Abouts from './components/pages/About.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skillz from './components/skillz.jsx';
import AnimationTitle from './components/AnimationTitle.jsx';
import Contact from './components/Contactme.jsx';
import Education from './components/Education.jsx';

// About Page Components
import ExpWork from './components/ExpWork';
import Projects from './components/Projects';

// Skills Page Components - TechStack replaces Workexp
import TechStack from './components/TechStack';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          
          {/* About Page Route */}
          <Route path='/about' element={
            <>
              <Abouts /> 
              <ExpWork />
              <Projects />
              <Education /> 
              <Contact />
            </>
          }></Route>
          
          {/* Skills Page Route - TechStack replaces Workexp */}
          <Route path='/skills' element={
            <>
              <AnimationTitle /> 
              <Skillz />
              <TechStack />
            </>
          }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
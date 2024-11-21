import React from 'react';
import Navbar from './components/Navbar';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './App.css';
import Home from './components/pages/Home';
import Abouts from './components/pages/About.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Services from './components/pages/Services';
//import Products from './components/pages/Products';
import Skillz from './components/skillz.jsx';
import Workexp from './components/Workexp.jsx';
import AnimationTitle from './components/AnimationTitle.jsx';
import Contact from './components/Contactme.jsx';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<><Abouts /> <Contact/> </>}></Route>
          <Route path='/skills' element={<><AnimationTitle/> <Skillz /><Workexp />  </>}></Route>


        </Routes>
      </Router>
    </>
  );
}

export default App;
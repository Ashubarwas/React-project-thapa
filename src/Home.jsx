import React, {useEffect} from 'react';
import HeroSection from './components/HeroSection';
import {useGlobalContext} from './Context';
import Contact from './Contact';
import Servics from "./Servics";
import About from './About';

const Home = () => {
  const {updateHome} = useGlobalContext();

  useEffect(()=> updateHome(),[]);

  return (
    <> 
      < HeroSection />
      <About />
      <Servics />
      <Contact />
    </>
  )
  }

export default Home;
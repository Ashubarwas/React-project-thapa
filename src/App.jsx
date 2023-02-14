import React from 'react';
import Contact from './Contact';
import Home from './Home';
import Servics from './Servics';
import About from './About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Error from './Error';

const App = () => {
  const theme ={
    colors:{
      heading:"rgb(24 24 29)",
      text : "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper:"#8490ff",
      footer_bg:"#0a1435",
      bg:"rgb(249 249 225)",
      btn:"rgb(98 84 243)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:"rgba(0, 0, 0, 0.02) 0px 1px 4px",

    },
    media:{mobile:"768", tab:"998"},
  };

  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/servics' element = {<Servics />} />
        <Route path='*' element = {< Error/>} />


      </Routes>
      <Footer /> 
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;
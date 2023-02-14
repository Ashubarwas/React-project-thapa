import React, { useEffect } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import { useGlobalContext } from './Context';
import { Button } from './styles/Button';

const About = () => {
  
  


  // const {upadateHome} = useGlobalContext();

  // useEffect(()=> upadateHome(),[]);
  const {updateAbout} = useGlobalContext();

  useEffect(()=> updateAbout(),[]);



  return (
    <>
    <Wrapper>
      {/* <HeroSection  /> */}
      <h3 style={{textAlign:"center", marginTop:"20px"}}>Design System for React JS</h3>
      <p className='pa'>Atomize React is a UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly.</p>
      <div className='contaniner'>
        <div className='grid grid-two-column grid'>
          <div>
            <button style={{height:"35px"}}>Get Start Now</button>
          </div>
         <div className="">
          <button style={{height:"35px"}}>Watch video</button>
         </div>
        </div>
      </div>

      <div className="card card" style={{width: "30rem", border:"1px solid black"}}>
  <img style={{marginTop:"10px"}} src="./img/download.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text" style={{marginTop:"20px"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to = '/'>
    <Button style={{marginTop:"20px", marginBottom:"20px"}}>Click Me</Button>
    </NavLink>
  </div>
</div>
</Wrapper>
    </>
  )
  }
  const Wrapper = styled.section`
     .pa{
      text-align: center;
      max-width:50%;
      margin: auto;
      margin-top:20px;
     }

     .grid{
      max-width:40%;
      margin:auto;
      margin-right:300px;
      margin-top:30px
     }

     .card{
      text-align: center;
      max-width:40%;
      margin:auto;
      margin-top:90px;
     }
     
    `;

  
export default About;
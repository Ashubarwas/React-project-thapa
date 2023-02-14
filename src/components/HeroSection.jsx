import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import {useGlobalContext} from '../Context';


const HeroSection = () => {
    const  {name, image} = useGlobalContext()
  return (
    <>
    <Wrapper>
      <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
            <p className='hero-top-data'>This IS ME</p>
            <h1 className='hero-heading'>{name}</h1>
            <p className='hero-para'> {name} is `React, sometimes referred to as a frontend JavaScript framework, <br />
             is a JavaScript library created by Facebook.</p>
         <Button className="btn hireme-btn">
            <NavLink to = "/contact">Hire me</NavLink>
         </Button>
            
        </div>
        
        <div className='section-hero-image'>
            <picture>
               
               <img className='hero-img' src={image} alt="image" />
            </picture>
        </div>         
      </div>
     </Wrapper>
    </>
  );
};

 const Wrapper = styled.section`
 padding:  9rem 0;
//  margin-left:200px; 

 .section-hero-data{
    display:flex;
    flex-direction: column;
    justify-content : center;
 }

 .btn{
    max-width: 16rem;

 }

 .hero-top-data{
    text-transform:uppercase;
    font-weight:500;
    font-size:1.5rem;
    color: ${({theme}) => theme.colors.helper}
 }

 .hero-heading{
    text-transform:uppercase;
    font-size: 4rem;
    max-width:10rem
 }
 .hero-para{
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 30rem;
    font-size:17px
 }

 .section-hero-image{
    display: flex;
    justify-content: center;
    align-items: center;
 }

 picture{
    text-align: center;
 }

 .hero-img{
    max-width: 90%;
    
 }

`;


export default HeroSection;
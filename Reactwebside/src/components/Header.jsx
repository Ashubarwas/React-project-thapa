import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <MainHeader>
        <NavLink to = '/'>
           <img className='logo' src="./img/React_logo.png" alt="logo" />
        </NavLink>
        <Navbar />
      </MainHeader>
    </>
  );
};

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 5rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;
justify-content: space-between;
align-item:center;

.logo{
  height: auto;
  max-width:15%;
  margin-top:10px
}

`;

export default Header;
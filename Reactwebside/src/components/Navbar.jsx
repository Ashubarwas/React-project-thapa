import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import{CgMenu, CgCloseR} from "react-icons/cg"

const Navbar = () => {
  const Nav = styled.nav`
 
  .navbar-list{
    display:flex;
    gap:8rem;

    li{
      list-style:none;

      .navbar-link{
          text-decoration: none;
          display: inline-block;
          font-size: 15px;
          text-transform: uppercase;
          color:${({theme})=>theme.colors.black};
          margin-top:20px
        }

        .navbar-link:hover{
            // color: &{({theme})=>theme.colors.helper};
            color:#8490ff;
        }
    }
    
  }
  .mobile-navbar-btn{
    display:none;

    // .close-outline{
    //   display:none;
    // }
  }

  // .mobile-navbar-btn[name='close-outline]{
  //   display:none;
  // }

  // @media(max-width:${({theme})=> theme.media.mobile}){
  //   .moblie-navbar-btn{
  //     display: inline-block;
  //   }
  }
  `;

  return (
    <>
      <Nav>
        <div className='menuIcon'>
          <ul className='navbar-list'>
            <li>
              <NavLink className="navbar-link" to = '/'>Home</NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to = '/about'>About</NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to = '/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to = '/servics'>Servics</NavLink>
            </li> 
          </ul>
       
        <div className='mobile-navbar-btn'>
          <CgMenu name='menu-outline'  className='mobile-nav-icon'/>
          <CgCloseR name='close-outline'  className='close-outline mobile-nav-icon'/>
        </div>
      </div>

      </Nav>
    </>
  )
}



export default Navbar;
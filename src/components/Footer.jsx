import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import{FaDiscord, FaInstagram, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <Wreapper>
        <section className='contact-short'>
          <div className='grid grid-two-column'>
            <div>
              <h3>Read to get started</h3>
              <h3>Talk to us today</h3>
            </div>
               <NavLink to= "/">
                <Button style={{float:"right"}}>Get Started</Button>
               </NavLink>
          </div>
        </section>

    {/* /////////////    footer section  /////// */}
    <footer>
      <div className='container grid grid-four-column'>
        <div>
          <h3>Ashu Sangwan</h3>
          <p>Lorem Ipsum is simply  text of the printing and industry.</p>
        </div>

        <div className='footer_subscribe'>
        <h4 style={{fontSize:"20px", color:"white"}}>Subscribe to get important updates</h4>
          <form action='#'>
            <input style={{padding:"10px", width:"250px", marginTop:"20px"}} type="email" autoComplete='off' placeholder='Email' required></input> <br />
            <Button style={{marginTop:"20px"}} type='submit' value='Subscribe'>Subscribe</Button>
          </form>
        </div>

        <div className='footer_social'>
          <h3>Follows Us</h3>
          <div className='social_icons'>
            <div>
              <FaDiscord className='icons' />
            </div>
            <div>
              <FaInstagram className='icons' />
            </div>

            <div>
              <a
                 href='https://www.youtube.com/@CodeWithHarry'
                 target='_blank'>

              <FaYoutube className='icons' />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-contact'>
          <h3>Call Us</h3>
          <h3>8222832302</h3>
        </div>
      </div>

      {/* {bootam///////////////////////////////////////} */}

      <div className='footer-bootom--section'>
        <hr />
        <div className='container grid grid-two-column'>
          <p>
            @
          </p>

        </div>

      </div>

    </footer>
      </Wreapper>
    </>
  )
}

const Wreapper = styled.section`
.contact-short{
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color:${({theme}) => theme.colors.bg};
  border-radius: 1rem;
  transform: translatey(40%);


}

footer{
  padding: 13rem 0 9rem 0;
  background-color: ${({theme})=>theme.colors.footer_bg};

  h3{
    color:white;
    margin-bottom: 2.4rem;
  }

  p{
    color:white;
    // margin-bottom: 2.4rem;
  }




  .icons{
    font-size: 2.4rem;
    position: relative;
    cursor: pointer;
    color:white;

  }
}

`;

export default Footer;
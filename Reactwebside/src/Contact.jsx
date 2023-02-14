import React from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';

const Contact = () => {
  const Wrapepr = styled.section`
   padding: 9rem 0 5rem 0;

   .container{
     margin-top: 6rem;
     text-align: center;

    .contact-from{
      max_width: 50rem;
      margin: auto; 

      .contact_input{
        display: flex;
        flex-direction: column;
        background-color:red;
      }
    } 

   }
`;
  return (
    <>
    
     <Wrapepr className="section">
        <h2 className='commom-heading' style={{fontSize:"30px", height:"30px"}}>Feel Free to Contact us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.8186215326546!2d75.72124231457161!3d29.140539817658716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123330daa50193%3A0x28ebbab00b8a2943!2sSector%2015%2C%20Hisar%2C%20Haryana%20125001!5e0!3m2!1sen!2sin!4v1676266327728!5m2!1sen!2sin" 
        width="100%"
        height="450"
        style={{border:0, marginTop:"100px"}}
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>"
       
     </Wrapepr> 

     <div className='Container'>
      <div className='contact-from' style={{maxWidth:"50rem", margin:"auto"}}>
        <form action='https://formspree.io/f/mqkopwzw' method='POST' className='contact_input' style={{display:"flex", flexDirection:"column",gap:"3rem"}}>
        <input  type="text" name='username' placeholder='UserName' autoComplete='off' required style={{ padding:"10px"}} /> 

        <input type="email" name='email' placeholder='Email' autoComplete='off' required  style={{ padding:"10px"}}/>

        <textarea name='message' cols="30" rows="6" autoComplete='off' required style={{ padding:"10px"}}> </textarea>

        {/* <input type='submit' value='send' style={{ padding:"10px"}} /> */}
        <Button type='submit' value='send' style={{width:"100px"}}>Send </Button>
        </form>


      </div>
     </div>  
    </>
  )
}



export default Contact;
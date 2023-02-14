import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from './Context';
import { Button } from './styles/Button';

const Servics = () => {
  const services = useGlobalContext();
  console.log(services);
  return (
    <>
      <Wrapepr className="section">
        <h2 className='commom-heading' style={{fontSize:"30px", height:"30px"}}>Our Services</h2>
        <div className='container grid grid-three-column'>
          {
            services.services.map((curElem)=>{
              const{id, title, price, description, image} = curElem;

              return <div className="card">
                <h3> Sr.No{id}</h3>
                <figure>
                  <img className='img' src="{image}" alt="image" />
                </figure>
                <div className='card_data'>
                  
                  <h3>Price.  {price}</h3>
                  <p1 style={{lineHeight:"20px", fontSize:"10px", }} >{description}</p1>
                  <NavLink to = '/servics'>
                  <Button className='btn'>Read More</Button>
                  </NavLink>
 
                </div>
              </div>
            })
          }
        </div>
      </Wrapepr>
    </>
  );
};

const Wrapepr = styled.section`
padding: 9rem 0;
// background-color: ${({theme}) => theme.colors};
background-color: ;

.container{
  max-width:100rem;
}

figure{
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
  overflow:hidden;

}
.card{
  border: 0.1rem solid rgb(170 170 170);
  margin-top:100px;
  padding:20px;
  margin:  50px 20px;
  
 
  .card-data{
    padding: 0 2rem;
  }

  h3{
    margin: 2rem 0;
    font-weight: 300;
    font-size: 2.4rem;
  }
}

.btn{
    margin: 2rem auto;
    border: 0.1rem solid rbg(98 84 243);
    display : flex;
}

.img{
  max-width: 10%;
  // margin-top: 10px;
}

`;

export default Servics;
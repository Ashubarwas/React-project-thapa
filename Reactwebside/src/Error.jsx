import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const Error = () =>{
    return(
        <>
        <Wrraper>
          <img src="./img/error.jpg" alt="" />
          <NavLink to = "/">
          <Button>Go Back</Button>
          </NavLink>
        </Wrraper>

        </>
    )
}

const Wrraper = styled.section`
padding: 9rem;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;

`;

export default Error;
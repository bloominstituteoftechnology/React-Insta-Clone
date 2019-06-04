import React from "react";
import styled from "styled-components";


const StyledInput = styled.input`
display:flex;
justify-align:center;

color:blue;
background-color:white;
width:200px;
height:25px;
border-radius : 5%;
border : 3px solid black;
margin-left : 600px;
margin-top : 50px;
background-color:white;
font-weight:bold;
padding:1%;
font-size:18px;
text-align:center;


${props => props.type}
${props => props.placeholder}
${props => props.inputHandler}

`;


export default StyledInput;
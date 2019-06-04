import React from "react";
import styled from "styled-components";


const StyledSearchBar = styled.input`

color:black;
background-color:white;
width:200px;
height:40px;
border-radius : 5%;
border : 2px solid black;


${props => props.type}
${props => props.placeholder}
${props => props.changeHandler}

`;


export default StyledSearchBar;


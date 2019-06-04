import React from"react";
import styled from "styled-components"




const LogoImage=styled.img` 
  
  height:80px;
  margin-left:10px
  padding:20px; 
  
  ${props=>props.src}
  `;
export default LogoImage
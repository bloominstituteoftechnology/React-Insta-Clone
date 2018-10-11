import React, {Component} from 'react';
import styled from 'styled-components';
const MainImg= styled.img `
    width:100%;
    height:auto;
`;
const Image =(prop)=>{
    return (
        <div>
            <MainImg  src={prop.ImageUrl} alt="main image"/>
        </div>
    )
}
export default Image;
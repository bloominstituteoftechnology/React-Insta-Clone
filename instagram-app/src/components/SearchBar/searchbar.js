import React from 'react';
import CameraLogo from './instagram-logo.png';
import InstaLogo from './logo.png';
import DM from './telegram.png';
import Like from './like.png';
import User from './user.png';
//import './instagram-app/src/App.css';
import styled from 'styled-components';



export const Button = styled.button`
  
width:150px;
margin-left:35%;
background:#33A2FF;
color:white;
border-radius:10px;
border:0px solid;
 
`;


export const Form=styled.form`
border-bottom:1px solid rgb(202, 202, 202);
  display:flex;
  justify-content: space-evenly;
  margin-top:10px;
  padding-bottom:10px;
  padding-top:10px;
  position:fixed;
  width:800px;
  margin:auto;
  background:white;
  margin-bottom:20px;
  top:0;
  
 

`;




export default function SearchBar(props){
    return(
       // <div className='searchbar'>
      <Form>
     <img alt ='cameralogo' src={CameraLogo} className='cameralogo'></img>
     <img alt='instalogo' src={InstaLogo} className='instalogo'></img>
        <input 
        type='text'
        placeholder='                  Search'
        onChange={props.searchPosts}
        
       />

    <img alt='dm' src={DM} className='icons'></img>
       <img alt='like' src={Like} className='icons'></img>
       <img alt='user' src={User} className='icons'></img>
        
       </Form>  

        //</div>
    )
}






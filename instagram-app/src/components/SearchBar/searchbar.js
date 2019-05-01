import React from 'react';
import CameraLogo from './instagram-logo.png';
import InstaLogo from './logo.png';
import DM from './telegram.png';
import Like from './like.png';
import User from './user.png';
//import './instagram-app/src/App.css';


export default function SearchBar(props){
    return(
        <div className='searchbar'>
        
     <img alt ='cameralogo' src={CameraLogo} className='cameralogo'></img>
     <img alt='instalogo' src={InstaLogo} className='instalogo'></img>
        <input 
        type='text'
        placeholder='                       Search'
        onChange={props.searchPosts}
        
       />

    <img alt='dm' src={DM} className='icons'></img>
       <img alt='like' src={Like} className='icons'></img>
       <img alt='user' src={User} className='icons'></img>
       
        </div>
    )
}
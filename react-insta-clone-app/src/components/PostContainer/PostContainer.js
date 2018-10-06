import React from 'react'
import './PostContainer.css'
import ImagesComponent from '../SearchBar/SearchBar-TitleImages'

function PostTitle(props){
    return (
        <div className='post-title'>
            <ImagesComponent src={props.src} alt={props.alt} className='post-title-thumbnail' />
            <span className='post-title-username'>{props.text}</span>
        </div>
    );
}
function PostImage(props){
    return (
        <ImagesComponent src={props.src} alt={props.alt} className='post-image' />
    );
}


export default function PostContainer(props){
    return (
        <div className='post-container-test'>
            <PostTitle src={props.src} alt={props.alt} text={props.text} />
            {/* <PostImage src={props.src} alt={props.alt} /> */}
        </div>
    );
}
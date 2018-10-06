import React from 'react'
import './PostContainer.css'
import ImagesComponent from '../SearchBar/SearchBar-TitleImages'

function PostTitle(props){
    return (
        <div className='post-title'>
            <ImagesComponent src={props.src} alt={props.alt} className='post-title-thumbnail' />
            <h1 className='post-username'>{props.text}</h1>
        </div>
    );
}
// function PostImage(props){
//     return (
//         <ImagesComponent src={props.src} alt={props.alt} className='post-image' />
//     );
// }
function IconAndLikes(props){
    return (
        <div className='icons-likes-section'>
            <div className='post-icons'>
                <ImagesComponent src={props.src1} alt={props.alt1} className='heart-icon' />
                <ImagesComponent src={props.src2} alt={props.alt2} className='chat-icon' />
            </div>
            <p>{props.likesCounter} likes</p>
        </div>
    );
}


export default function PostContainer(props){
    return (
        <div className='main post'>
            <PostTitle src={props.src1} alt={props.alt} text={props.title} />
            <ImagesComponent src={props.src2} alt={props.alt} className='post-image' />
            <IconAndLikes src1={props.srcIcon1} src2={props.srcIcon2} alt1={props.altIcon1} alt2={props.altIcon2} likesCounter={props.likesCounter} />
        </div>
    );
}
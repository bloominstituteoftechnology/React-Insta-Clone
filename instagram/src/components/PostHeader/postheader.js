import React from 'react';
import './postheader.css';

const PostHeader = props =>{
    return (
         <div className="header" key={props.posterHead.thumbnailUrl + props.posterHead.username}>
            <img className='thumbnail' src={props.posterHead.thumbnailUrl} alt="user's profile Thmbnl"/> 
                {props.posterHead.username}
        </div>
    )
}

export default PostHeader;
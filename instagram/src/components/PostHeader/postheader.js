import React from 'react';
import './postheader.css';

const PostHeader = props =>{
    return (
        <div>
            {props.posterHead.map(user =>{
                return (
                    <div key={user.thumbnailUrl + user.username}>
                        <img className='thumbnail' src={user.thumbnailUrl}/> 
                        {user.username}
                    </div>
                )
            })}
        </div>
    )
}

export default PostHeader;
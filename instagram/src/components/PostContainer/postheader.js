import React from 'react';


import './postcontainer.css';


const PostHeader = props => {
    return (
        <div className="postHeader">
            <div className="headerImage">
                <img className="userImg"
                alt ="related to post"
                src={props.userimg} 
                />
            </div>
            <div className="headerName">
                {props.username}
            </div>
        </div>
            );
        };
        
export default PostHeader;
import React from 'react';
import "../App.css"

const Post = props => {
    return(
        <div className="post">

            <div className="thumbnail-profile">
                <img src={props.thumbnail}/>
                <p>{props.username}</p>
            </div>

            <div className="image">
                <img src={props.image} />
            </div>
            
        </div>
    );
}


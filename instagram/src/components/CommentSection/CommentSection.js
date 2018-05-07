import React from 'react';
import './commentSection.css';

const CommentSection = props => {
    console.log("CommentSection Props: ", props);
    return (
        <div>
            {/* <h1>Hello from Comment Section!</h1> */}
            <img src={props.csitem.imageUrl} className="imgFormat" />
            {props.csitem.comments.map(cscomments => {
                return (

                    <div key={cscomments.username + cscomments.length}>
                    
                    {cscomments.username} {cscomments.text}
                    </div>
                )

            })}
            
            <input type='text' />
        </div>
    )
}
export default CommentSection;
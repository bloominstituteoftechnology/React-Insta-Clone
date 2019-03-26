import React from 'react';
// import SearchBar from './SearchBar';

const CommentSection = props => {
    return (
        <div className="commentSection">
        <input placeholder="comment"/>
        {props.passComment.map ((userComment, index) =>{
            return (
                <div className="userComment" key={index}>
                    <span>{userComment.username}</span>
                    <span>{userComment.text}</span>
{/* user userComment to show username & text located in data comments */}
                </div>
             )
            })}
        
        </div>
    )}


 export default CommentSection;
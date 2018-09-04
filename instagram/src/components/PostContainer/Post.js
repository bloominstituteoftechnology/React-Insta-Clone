import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="post">
            <img className="avatar" src={props.dummyData.thumbnailUrl} />
            <div className= "username bold">
                { props.dummyData.username }
            </div>
            <img className= "img-content" src={props.dummyData.imageUrl}/>
            <div className="bold likes">
                {props.dummyData.likes} likes
            </div>
            <div className="comment-container">
                {props.dummyData.comments.map((data,i) => (
                    <CommentSection
                        dummyData={data}
                        key= {i}
                        text= {data.text}
                    />

                ))}
        </div> 
        </div>
    );
};

export default Post;



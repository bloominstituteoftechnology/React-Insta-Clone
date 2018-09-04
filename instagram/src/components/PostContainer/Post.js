import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="post">
            <img className="avatar" src={props.dummyData.thumbnailUrl} />
            <div className= "username">
                { props.dummyData.username }
            </div>
            <img className= "img-content" src={props.dummyData.imageUrl}/>
            {props.dummyData.likes}
            {props.dummyData.timestamp}
            
            {props.dummyData.comments.map((data,i) => (
                <CommentSection
                    dummyData={data}
                    key= {i}
                    text= {data.text}
                />

            ))}
            
        </div>
    );
};

export default Post;



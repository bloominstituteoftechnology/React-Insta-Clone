import React from 'react';
import './post-container.css'
import '../CommentSection/CommentSection'
// import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    console.log(props)
    return (
        <div className='main-content'>
            {props.data.map(data => (
                <h2>
                    <img alt='profile img' src={data.thumbnailUrl}/>
                    {data.username}
                    {data.likes}
                    {data.timestamp}
                    <img alt='instagram image' src={data.imageUrl}/>
                </h2>
            ))}
                    {/* {props.username}
                    {props.thumbnailUrl}
                    {props.imageUrl}
                    {props.likes}
                    {props.timestamp}
                    {props.comments} */}
            </div>
    );
};

export default PostContainer

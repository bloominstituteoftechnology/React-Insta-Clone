import React from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';

const PostContainer = props =>{
    return (
        <div className='post-container'>
            {props.posts.map((item,data) => {
                return(
                    <div key={data}>
                    <div>{item.username}</div>
                    <img className ='thumbnail' src={item.thumbnailUrl} alt ='user thumbnail img'/>
                    <img className = 'post-img' src={item.imageUrl} alt='Post Img'/>
                    <div>{item.likes} likes</div>
                    <div><Comments comments={item.comments}/></div>
                    <div>{item.timestamp}</div>
                </div>
                )}
            )}
        </div>
    )
}


export default PostContainer;
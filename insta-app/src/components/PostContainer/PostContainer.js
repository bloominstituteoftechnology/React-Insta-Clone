import React from 'react'; 
import PropTypes from 'prop-types'; 
import CommentSection from '../CommentSection/CommentSection'; 
import dummyData from '../../dummy-data'

const PostContainer = props =>{
    return(
    <div className="post-container">
    <div className="userName">
    {props.dummyData.map((username, data)=>
    <div key = {data}>
    <img>{dummyData. thumbnailUrl}</img>
    <h1>{dummyData.username}</h1>
    </div>
    )};
    </div>
    <div className ="img-post">
    {props.dummyData.map((image, data)=>
    <div key = {data}>
    <img>{dummyData.imageUrl}</img>
    <p>{dummyData.likes}</p>
    <p>{dummyData.timestamp}</p>
    </div>
    )};
    </div>
    <CommentSection />
    </div>
    )
}
export default PostContainer; 
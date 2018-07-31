import React from 'react'; 
import PropTypes from 'prop-types'; 
import CommentSection from '../CommentSection/CommentSection'; 
import dummyData from '../../dummy-data'

const PostContainer = props =>{
    return(
    <div className="post-container">
    {props.posts.map((item, data)=>{
        return(
            <div key={data}>
            <img className = "thumbnail" src={item.thumbnailUrl} alt="user"/>
            <div>{item.username}</div>
            <img className = "post-img" src={item.imageUrl} alt="Post-Image"/>
            <div>Likes{item.likes}</div>
            <div><CommentSection comments={item.comments}/></div>
            </div>
        )}
    )}
    </div>
    )
}
export default PostContainer; 
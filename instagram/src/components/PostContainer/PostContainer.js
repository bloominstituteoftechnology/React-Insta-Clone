import React from 'react';
import CommentSection from '../CommentSection/commentSection';
import './postContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className = 'postContainer'>
        {props.dummyData.map (data => {
            return (
                <div className = 'posts'>
                    <div className = 'thumbName'>
                        <img clasName = 'thumbnail' src ={data.thumbnailUrl}/>
                        <p><strong>{data.username}</strong></p>
                    </div>
                    <img src ={data.imageUrl}/>
                    <p>{data.likes} likes</p>
                    <p>{data.timestamp}</p>
                    <CommentSection item={data}/>
                </div>  
            )
        }
        )}
        </div> 
    )
}
 PostContainer.propTypes = {
     username: PropTypes.string,
     thumbnailUrl: PropTypes.string,
     imageUrl: PropTypes.string,
     likes: PropTypes.number,
     timestamp: PropTypes.string,
     comments: PropTypes.arrayOf(PropTypes.string),
 }








export default PostContainer;
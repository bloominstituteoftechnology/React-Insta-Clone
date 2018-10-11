import React from 'react';
import PropTypes from 'prop-types';
import './postcontainer.css';



const PostContainer = props => {
    return (
        <div className = 'post-container'>
            <div className='post-header'>
                <img className= 'avatar'  src= {props.content.thumbnailUrl} alt={props.content.username}/>
                <h1 className= 'username'>{props.content.username}</h1> 
            </div>
            
            <img className= 'post-image' src= {props.content.imageUrl} alt={props.content.username}/>
        </div>
    );   
    
} 

PostContainer.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object)
}
PostContainer.propTypes = {
    username: PropTypes.string,

}
export default PostContainer;
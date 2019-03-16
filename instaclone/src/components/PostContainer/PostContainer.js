import  React from 'react';
import './post-container.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommetSection.js';
import Likes from './Likes.js';




const PostContainer = props => {
    console.log(props);
    return(
        <div className='fluid-container'>
        {props.dummy.map(element => (
            <div key={element.timestamp} className="post">
                <div className="post-header">
                    <img className="user-img" src={element.thumbnailUrl} alt='user img'/>
                    <p><strong>{element.username}</strong></p>
                </div>
                    <img className="post-img" src={element.imageUrl} alt='post img'/>
                <div className="icons">
                <Likes  />
                </div>
                <CommentSection 
                element={element}
                /> 
            </div>
        ))}
        </div> 
                                        )
                                        }

PostContainer.propTypes = {
    dummy: PropTypes.arrayOf(PropTypes.shape({
        timestamp: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
                                             }))};
export default PostContainer;
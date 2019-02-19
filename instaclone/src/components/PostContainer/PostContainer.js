import  React from 'react';
import './post-container.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommetSection.js';


const PostContainer = props => {
    console.log(props);
    return(
        <div className='post-container'>
        {props.dummy.map(element => (
            <div key={element.timestamp} className="post">
                <div className="post-header">
                    <img className="user" src={element.thumbnailUrl}/>
                    <p><strong>{element.username}</strong></p>
                </div>
                    <img className="post-image" src={element.imageUrl}/>
                <div className="social-icons">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
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
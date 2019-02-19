import  React from 'react';
import './post-container.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommetSection.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostContainer = props => {
    console.log(props);
    return(
        <div className='fluid-container'>
        {props.dummy.map(element => (
            <div key={element.timestamp} className="post">
                <div className="post-header">
                    <img className="user-img" src={element.thumbnailUrl}/>
                    <p><strong>{element.username}</strong></p>
                </div>
                    <img className="post-img" src={element.imageUrl}/>
                <div className="icons">
               {/* font awesome heart*/}
               {/* font awesome comment */}
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
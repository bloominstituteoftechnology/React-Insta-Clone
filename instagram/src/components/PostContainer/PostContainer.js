import React from 'react';
import CommentSection from '../CommentsSection/CommentSection';
import PropTypes from 'prop-types'

const PostContainer = (props) => {
        
        return(
                <div>
                
                <h2>{props.post.username}</h2>
                <img src={props.post.imageUrl} alt={props.alt}/>
                        {props.post.comments.map((comment, index) => (
                                <CommentSection comment={comment} key={index} />
                        ))}
                        <div className="commentLine">
                                <input className="comPut"></input><button>...</button>
                        </div>
                </div>
        );

        
}

        PostContainer.propTypes = {
                comments: PropTypes.array,
                imageUrl: PropTypes.string,     
                likes: PropTypes.number
        }

export default PostContainer;
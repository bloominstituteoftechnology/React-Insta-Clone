import React from 'react';
import CommentSection from '../CommentsSection/CommentSection';
import PropTypes from 'prop-types'

const PostContainer = (props) => {
        console.log("props.posts on PostContainer: ", props.posts)
        
        return(
                <div>
                
                <h2>{props.posts.username}</h2>
                <img src={props.posts.imageUrl} alt={props.alt}/>
                        {props.posts.comments.map((comment, index) => (
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
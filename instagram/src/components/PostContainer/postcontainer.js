import React from 'react';
import CommentSection from '../CommentSection/commentsection'
import './postcontainer.css'
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return ( 
        <div className="row post-container">
            <div className="d-flex flex-column align-items-start justify-content-start">  
                <h2 className="header d-flex align-items-center justify-content-center"><img className="thumbnail-img" src={props.data.thumbnailUrl} alt=""/><span className="username username-header">{props.data.username}</span></h2>
                <img className="post-img" src={props.data.imageUrl} alt=""/>
                <div className="d-flex icons">
                    <i className="far fa-heart icon"></i><i className="far fa-comment icon"></i>
                </div>
                <div className="likes-text"><span className="username">{props.data.likes} likes</span></div>
            </div>
            <CommentSection data={props.data}/>
        </div>
     );
}

PostContainer.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number       
    })
};
 
export default PostContainer;
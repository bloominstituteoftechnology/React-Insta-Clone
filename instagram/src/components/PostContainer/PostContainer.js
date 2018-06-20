import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './postContainer.css';

const PostContainer = (props) => {
    // console.log(props);
    return (
      <div className="container">
        <div className="container__heading">
            <img src={props.data.thumbnailUrl} className="container__heading--photo" alt="thumbnail"/>
            <h1 className="container__heading--h1">{props.data.username}</h1>
        </div>
        <img src={props.data.imageUrl} alt="post"   className="container__img"/>
        <i 
            className="far fa-heart"
            onClick={(e) => props.addLike(props.index)}
            >
            <span>{props.data.likes} likes </span>
        </i>
        <i className="far fa-comment"></i>
        <CommentSection comments={props.data.comments} 
                        index={props.index} 
                        addComment={props.addComment}/>
      </div>
    );

};
PostContainer.propTypes ={
    data: PropTypes.shape({
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string.isRequired,
    })
}
export default PostContainer;

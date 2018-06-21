import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const  PostContainer= props => {
        
	return(
                <div className={props.PostContainer}>		
		<div>

		<div className={props.HeaderContainer}>
		<img className={props.HeaderImageStyle} src={props.dummyData.thumbnailUrl} alt="" />
		<p>{props.dummyData.username}</p>	
		</div>	

		<img className={props.PostImage} src={props.dummyData.imageUrl} alt="" />
		</div>

		<CommentSection postId={props.dummyData.imageUrl} addComment={props.addComment} NewCommentValue={props.NewCommentValue} CommentValue={props.changeCommentValue}  Comments={props.dummyData.comments} />
		
	
		</div>


	);
}

PostContainer.propTypes = {
  dummyData:PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    timestamp: PropTypes.string
  })
};


export default PostContainer;

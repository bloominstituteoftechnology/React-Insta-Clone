import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';


class Post extends React.Component {
	constructor(props){
	super(props);

	this.state={
	
		likes: props.dummyData.likes
	
	};
}

	incrementLikes = () =>{
	let likes = this.state.likes+1;
	this.setState({likes});		
	};
	
	
render(){
	
	return(
                <div className="post-container">
                <div>

                <div className="header-container">
                <img className="header-image-style" src={this.props.dummyData.thumbnailUrl} alt="" />
                <p>{this.props.dummyData.username}</p>
                </div>

                <img className="post-image" src={this.props.dummyData.imageUrl} alt="" />
                </div>

                <LikeSection Likes={this.state.likes}  incrementLikes={this.incrementLikes}   />

                <CommentSection postId={this.props.dummyData.imageUrl} addComment={this.props.addComment} NewCommentValue={this.props.NewCommentValue} CommentValue={this.props.changeCommentValue}  Comments={this.props.dummyData.comments} />


                </div>


        );

}

}

Post.propTypes = {
  dummyData:PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    timestamp: PropTypes.string
  })
};



export default Post;

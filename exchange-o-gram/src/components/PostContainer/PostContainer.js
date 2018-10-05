import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.css'

class PostContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.post.comments
        }
    }

    render(){
        if(this.props.post.isHidden){
            return (
                <div className="hide-container"></div>
            )
        }
        return(
            <div className="post-container">
                <div className="img-name">
                    <img src={this.props.post.thumbnailUrl} alt={`${this.props.post.username} Icon`}></img>
                    <p>{this.props.post.username}</p>
                </div>
                <img src={this.props.post.imageUrl} alt={`${this.props.post.username} Post`}></img>
                <CommentSection index={this.props.index} likes={this.props.post.likes} comments={this.state.comments} addLike={this.props.addLike} addNewComment={this.props.addNewComment}/>
            </div>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })
}

export default PostContainer;
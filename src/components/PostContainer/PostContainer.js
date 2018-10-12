import React, {Component} from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js'
 class PostContainer extends Component  {
    state = {
        heart1: "far fa-heart",
        heart2: "fas fa-heart hide",
        likes: 0,
    }
    componentDidMount() {
        this.setState((state)   =>  ({
            likes: this.props.likes
        }))
    }
     likePost = ()   =>  {
        this.setState((state)   =>  ({
            likes: this.state.likes + 1,
            heart1: "far fa-heart hide",
            heart2: "fas fa-heart",
        }))
    }
     unlikePost = () =>    {
        this.setState((state)   =>  ({
            likes: this.state.likes - 1,
            heart1: "far fa-heart",
            heart2: "fas fa-heart hide",
        }))
    }
     render()    {
        return(
            <div className="postContainer">
                <div className="postHeader">
                    <img src={this.props.thumbnail} alt="User profile"/>
                    {this.props.username}
                </div>
                <img className="postImage" src={this.props.image} alt="Post"/>
                <div className="postButtons">
                    <i className={this.state.heart1} onClick={this.likePost}></i>
                    <i className={this.state.heart2} onClick={this.unlikePost}></i>
                    <i className="far fa-comment"></i>
                </div>
                <div className="likes">
                    {this.state.likes} likes
                </div>
                <CommentSection timestamp={this.props.timestamp} content={this.props.comments}/>
            </div>
        )
    }
}
 PostContainer.propTypes =   {
    thumbnail: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
 }
 export default PostContainer;
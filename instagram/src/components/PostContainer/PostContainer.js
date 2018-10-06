import React, {Component} from 'react';
import './postcontainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js'

class PostContainer extends Component  {
    componentDidMount() {
        let heart1 = document.querySelector(".heart1");
        let heart2 = document.querySelector(".heart2");
        heart2.style.display = "none";
        // document.addEventListener()
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
                    <i className="far fa-heart heart1"></i>
                    <i className="fas fa-heart heart2"></i>
                    <i className="far fa-comment"></i>
                </div>
                <div className="likes">
                    {this.props.likes} likes
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

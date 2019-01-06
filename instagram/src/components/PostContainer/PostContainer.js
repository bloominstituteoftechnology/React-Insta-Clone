import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import instaHeart2 from './insta-heart.png';
import instaReply from './insta-reply.png';
import CommentSection from '../CommentSection/CommentSection';


class PostContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: this.props.data.likes
        }
        this.handleLikes = this.handleLikes.bind(this)
    }

    handleLikes() {
        console.log("liked clicked yay")
        this.setState(prevState => {
            return {
                likes: prevState.likes + 1
            }
        })
    }

    render() {
        return (
            <div className="postcontainer">
                <div className="user-info">
                    <img src={this.props.data.thumbnailUrl} className="thumbnail" alt="data thumbnail"/>
                    <p className="username">{this.props.data.username}</p>
                </div>
                <div>
                    <img src={this.props.data.imageUrl} className="imageurl" alt="data url pic" />
                </div>
                <div className="png-images">
                    <img className="insta-heart2" alt="instagram heart" src={instaHeart2} onClick={this.handleLikes} />
                    <img className="insta-reply" alt="instagram reply" src={instaReply} />
                </div>
                <div>
                    <p>{this.state.likes} likes </p>
                </div>             
                    <CommentSection comments={this.props.data.comments} />                                 
            </div>
        )
    }
 
}

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        timestamp: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        likes: PropTypes.number,
        imageUrl: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })
}

export default PostContainer;
import React from "react";
import CommentSection from './../CommentSection/CommentSection';
import Likes from './Likes';
import PropTypes from 'prop-types';
import './Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.post.comments,
            likes: props.post.likes
        }
    }
    addLike = () => {
        var newLikes = this.state.likes;
        this.setState({likes: newLikes + 1});
    }
    render() {
        return(
            <div className="post-container container">
                <div className="user-info ">
                    <div><img src={this.props.post.thumbnailUrl} alt=""/></div>
                    <div>{this.props.post.username}</div>
                </div>
                <div className="post-image">
                    <img src={this.props.post.imageUrl} alt=""/>
                </div>  
                <div className="likes container">
                    <div className="icons">                        
                        <Likes increaseLikes={this.addLike}/>
                    </div>
                    <div className="count">
                        {this.state.likes} Likes
                    </div>
                </div>
                
                <div className="comments">
                    <CommentSection comments={this.state.comments}/>
                </div>    
                
            </div>
        )
    }
}
// const Post = props => {
    
// }
Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        links: PropTypes.number
    }) 
};
export default Post;
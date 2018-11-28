import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostsHeader from "./PostsHeader";
import LikeContainer from "./LikeContainer";
import PropTypes from "prop-types";
import './Post.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    addLike = () => {
        const newLike = this.state.likes +1;
        this.setState({
            likes: newLike
        });
    };


    render() {
        return (
            <div className='post'>
                <PostsHeader
                    username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <img className='post-image'
                    src={this.props.post.imageUrl}
                    alt='thumbnail for post'
                />
                <LikeContainer
                    addLike={this.addLike}
                    likes={this.state.likes}
                />
                <CommentSection
                    comments={this.props.post.comments}
                    idPost={this.props.post.imageUrl}
                />        
            </div>
        );
    }    
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string
    })
}

export default Post;
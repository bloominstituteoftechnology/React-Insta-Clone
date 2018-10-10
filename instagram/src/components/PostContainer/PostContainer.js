import React from 'react';
import PostHeader from './PostHeader';
import Likes from './Likes';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: this.props.post,
            likes: this.props.post.likes,
            classList: []
        }
    }

    likeHandler = event => {
        event.preventDefault();
        if (event.target.classList.contains('liked')) {
            event.target.classList.remove('liked');
            this.setState({
                likes: this.state.likes - 1,
                classList: event.target.classList,
            });
        }
        else {
            event.target.classList.add('liked');
            this.setState({
                likes: this.state.likes + 1,
                classList: event.target.classList,
            });
        }
    }
    
    render() {
        return (
            <div className="post">
                <PostHeader post={this.state.post}/>
                <img className="postImage" alt="post" src={this.state.post.imageUrl}></img>
                <Likes likes={this.state.likes} classList={this.state.classList} likeHandler={this.likeHandler}/>
                <CommentSection post={this.state.post} username={this.props.username}/>
            </div>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
    })
}

export default PostContainer;
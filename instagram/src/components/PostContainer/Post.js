import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikePost from './LikePost';
import PostHeader from './PostHeader';
import './PostContainer.css'
import {PostDiv} from '../../Styles';


class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }
    increment = () => {
        let likes = this.state.likes + 1; 
        this.setState({ likes });
    };
    render() {
        return (
            // <div className="post">
            <PostDiv>
                <PostHeader
                    username={this.props.post.username}
                    thumbnail={this.props.post.thumbnailUrl}
                />
                <div className="post-image-wrapper">
                    <img
                        alt="post pic"
                        className="post-image"
                        src={this.props.post.imageUrl}
                    />
                </div>
                <LikePost
                    increment={this.increment}
                    likes={this.state.likes} 
                /> 
                <CommentSection
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments} 
                />
            </PostDiv>
            // </div>
        );
    }
}
Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default Post;

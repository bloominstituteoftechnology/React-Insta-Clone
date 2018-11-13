import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikesSection';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    render(){
        return (
            <div className="post-container">
                <PostHeader username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl} />
    
                <div className="post-contents">
                    <img src={this.props.post.imageUrl} alt="post content" />
                </div>
    
                <LikeSection likes={this.state.likes} />
    
                <CommentSection comments={this.props.post.comments} />
            </div>
        )
    }
}


Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailURL: PropTypes.string,
        imageURL: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
            })
        )
    })
}

export default Post;
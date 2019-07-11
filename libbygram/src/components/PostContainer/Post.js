import React from 'react';
import PropTypes from "prop-types";
import Likes from '../CommentSection/Likes';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    
    iLikeIt = () => {
        const likes = this.state.likes + 1;
        this.setState({ likes })
    };

    render() {
    return (
        <div className="post-wrapper">
        <PostHeader
         username={this.state.username}
         thumbnailUrl={this.state.thumbnailUrl}
        />
        <Likes
        iLikeIt={this.iLikeIt}
        likes={this.state.likes}
        />
        <CommentSection
        postIndex={this.props.post.imageUrl}
        comments={this.props.post.comments}
        />
  </div>
    );
}
}


Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string
  })
};

export default Post;
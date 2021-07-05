import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import LikeSection from './LikeSection';
import PropTypes from 'prop-types';

class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState + 1
            };
        });
    };

    render() {
        return (
            <div>
                <PostHeader
                    username= {this.props.post.username}
                    thumbnailUrl= {this.props.post.thumbnailUrl}
                />
                <div>
                    <img 
                        src= {this.props.post.imageUrl} 
                        alt= "post-main"
                    />
                </div>
                <LikeSection
                incrementLike={this.incrementLike}
                likes={this.state.likes}
                />
                <CommentSection comments= {this.props.post.comments} />
            </div>
        );    
    };
}

Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
};  

export default Post;
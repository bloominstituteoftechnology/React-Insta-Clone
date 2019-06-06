import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.post.likes
        };
    }

    incrementLikes() {
        let likes = this.state.likes + 1;
        this.setState({likes});
    }; 

    render() {
        return (
            <div
              className='post'
            >
                <img className='thumbnail' alt='' src={this.props.post.thumbnailUrl} /> {this.props.post.userName}
                <img className='post-image' alt='' src={this.props.post.imageUrl} />
                <LikeSection
                  incrementLikes={this.incrementLikes}
                  likes={this.state.likes}
                />
    
                <CommentSection
                    comments={this.props.post.comments}
                />
            </div>
        )
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
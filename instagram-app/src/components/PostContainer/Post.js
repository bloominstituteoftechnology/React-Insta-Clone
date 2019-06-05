import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.posts.likes
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
                <img className='thumbnail' src={this.props.post.thumbnailUrl} /> {this.props.post.userName}
                <img className='post-image' src={this.props.post.imageUrl} />
                {/* Enter fa-icons for like here */}
                <p>{this.props.post.likes} likes</p>
    
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
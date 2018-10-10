import React from 'react';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';
import './Posts.css'

class Post extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            likes: props.post.likes,
            liked: false
        };
    }

    incrementLike = () => {
        if(this.state.liked === false){
            let likes = this.state.likes + 1;
            this.setState({ likes, liked: true })
        }
        if(this.state.liked === true){
            let likes = this.state.likes - 1;
            this.setState({ likes, liked: false})
        }   
        
    }

    render() {
        return (
            <div className="img-and-comment">
                <PostHeader
                    thumbnailUrl={this.props.post.thumbnailUrl}
                    username={this.props.post.username}
                />
                <div className="image-border">
                    <img 
                        alt="user-img-post"
                        className="post-image"
                        src={this.props.post.imageUrl}
                    />
                </div>
                <LikeSection incrementLike={this.incrementLike} likes={this.state.likes} bool={this.state.liked} />
                <CommentSection comments={this.props.post.comments}/>
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
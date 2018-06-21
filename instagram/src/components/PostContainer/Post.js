import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './PostContainer.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes,
            liked: false,
            heartClass: 'fa-heart likes-heart far'
        }
    }

    likeToggle = () => {
        if(!this.state.liked) {
            this.incrementLike();
        }
        else {
            this.decrementLike();
        }
    }

    incrementLike = () => {
        this.setState({likes: ++this.props.post.likes, liked: true, heartClass: 'fa-heart likes-heart fas'});
    }

    decrementLike = () => {
        this.setState({likes: --this.props.post.likes, liked: false, heartClass: 'fa-heart likes-heart far'});
    }

    render() {
        return (
            <div className="post">
                <div className="post-border">
                    <PostHeader username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl} timestamp={this.props.post.timestamp} />
                </div>
                <div className="post-image">
                    <img alt="post thumbnail" className="post-image" src={this.props.post.imageUrl} />
                </div>
                <div className="likes-icons">
                    <i onClick={this.likeToggle} className={this.state.heartClass}></i>
                    <i className="far fa-comment"></i>
                    <div className="likes">
                    <p>{`${this.state.likes} likes`}</p>
                    </div>
                </div>
                <div className="comment-section">
                    <CommentSection comments={this.props.post.comments} postId={this.props.post.imageUrl} />
                </div>
            </div>
        )
    }
}
    


export default Post;
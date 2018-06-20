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
            heartClass: 'far fa-heart'
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
        this.setState({likes: ++this.props.post.likes, liked: true, heartClass: 'fas fa-heart'});
    }

    decrementLike = () => {
        this.setState({likes: --this.props.post.likes, liked: false, heartClass: 'far fa-heart'});
    }

    render() {
        return (
            <div>
                <div className="post-border">
                    <PostHeader username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl} />
                </div>
                <div className="post-image">
                    <img alt="post thumbnail" className="post-image" src={this.props.post.imageUrl} />
                </div>
                <div className="likes">
                    <i onClick={this.likeToggle} className={this.state.heartClass}></i>
                    <i className="far fa-comment"></i>
                    <p className="likes">{`${this.state.likes} likes`}</p>
                </div>
                <div className="comment-section">
                    <CommentSection comments={this.props.post.comments} />
                </div>
            </div>
        )
    }
}
    


export default Post;
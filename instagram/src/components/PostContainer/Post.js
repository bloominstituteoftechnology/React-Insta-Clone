import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';


class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        }
        
    }

    componentDidMount() {
        this.setState({
            likes: this.props.post.likes,
        })
    }

    incrementLikes = (event) => {
        if (!event.target.classList.contains('fas')) {
            this.setState({
                likes: this.props.post.likes + 1
            })
        }
        else if (event.target.classList.contains('fas')) {
            this.setState({
                likes: this.props.post.likes
            })
        }
        event.target.classList.toggle('fas');
    }

    render() { 
        return (
            <div className="post">
                <div className="post-header">
                    <img src={`${this.props.post.thumbnailUrl}`} className="post-header__thumbnail" alt="thumbnail"/>
                    <span>{this.props.post.username}</span>
                </div>
                <img src={`${this.props.post.imageUrl}`} className="post-image" alt="main"/>
                <div className="content">
                    <div className="respond">
                        <i onClick={this.incrementLikes} className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </div>
                    <div className="likes">
                        <span>{this.state.likes} likes</span>
                    </div>
                    <div className="comments">
                        <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp} />
                    </div>
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailURL: PropTypes.string,
        imageURL: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object),
    })
}

export default Post;
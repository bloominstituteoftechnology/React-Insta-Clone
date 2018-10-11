import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import PostActions from './PostActions';
import CommentContainer from './CommentContainer';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        const {likes, timestamp, comments, index} = props;
        this.state = {
            likes,
            timestamp,
            comments,
            index,
            commentValue: '',
            username: 'chris',
            postLiked: false,
        }
    }

    componentDidMount() {
        const keyname = `post-${this.state.index}`
        const activeKey = localStorage.getItem(keyname);

        
        activeKey !== null 
        ? this.setState(JSON.parse(activeKey))
        : localStorage.setItem(keyname, JSON.stringify(this.state))

    }

    componentDidUpdate() {
        const keyname = `post-${this.state.index}`
        localStorage.setItem(keyname, JSON.stringify(this.state));
    }

    addNewComment = (event) => {
        event.preventDefault();
        if(this.state.commentValue.length < 3) return;
        this.setState(prevState => {
            const newComment = {
                username: this.state.username,
                text: this.state.commentValue,
            }
            return {
                comments: [...prevState.comments, newComment],
                commentValue: '',
            }
        });
    }

    onLikePost = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            
            return {
                likes: prevState.postLiked ? prevState.likes - 1 : prevState.likes + 1,
                postLiked: !prevState.postLiked
            }
        });
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className="comment-section">
            <PostActions 
                likePost={this.onLikePost}
                postLiked={this.state.postLiked}
            />
            <div className="likes">{this.state.likes} likes</div>
            <CommentContainer comments={this.state.comments} />
            <time>21 minutes ago</time>
            <form className="comment-input" onSubmit={this.addNewComment}>
                <textarea 
                    placeholder="Add a comment..." 
                    value={this.state.commentValue}
                    onChange={this.changeHandler}
                    name="commentValue"
                />
                <button className="post-text">Post</button>
            </form>
        </div>
    );
}
}

export default CommentSection;

CommentSection.propTypes = {
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })),
}

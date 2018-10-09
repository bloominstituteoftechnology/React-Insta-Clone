import React from 'react';
import CommentSection from './index.js';
import PropTypes from 'prop-types';
import './index.css';

class CommentMap extends React.Component {
    constructor() {
        super();

        this.state = {
            comments: [],
            newCommentText: '',
            liked: false,
        };
    }

    componentDidMount() {
        this.setState({ timestamp: this.props.userData.timestamp, comments: this.props.comments, likes: this.props.userData.likes, liked: false, newComment: this.state.newComment, });
    }

    
    addNewComment = (event) => {
        event.preventDefault();
        const username = 'User 1';
        const text = this.state.newCommentText;
            this.setState({
                comments: [...this.state.comments, { username, text }],
                newCommentText: '',
            });

    };

    handleChange = (event) => {
        this.setState({ newCommentText: event.target.value });
    }

    likePost = () => {
        let liked = this.state.liked;
        if (liked === false) {
            this.setState({ likes: this.state.likes + 1});
            this.setState({ liked: true });
        }
        else if (liked === true) {
            this.setState({ likes: this.state.likes - 1 });
            this.setState({ liked: false });
        }
    };

    
    render() {
        return (
            <div>
                <div className='interactive-action-buttons'>
                    <img src='https://techflourish.com/images/instagram-icon-clipart-panda-18.jpg' alt='Heart Icon' onClick ={this.likePost}  className='like-icon' />
                    <img src='https://static.thenounproject.com/png/9654-200.png' alt='Speech Bubble' />
                </div>

                <div className='likes'>
                    <p>{this.state.likes} likes</p>
                </div>
                {this.state.comments.map((comment) => <CommentSection comment={comment} />)}
                
                <div className='post-time'>
                    <p>{this.state.timestamp}</p>
                </div>

                <div className='comment-bar'>
                    <form onSubmit={this.addNewComment} >
                        <input type='text' placeholder='Add a comment' value={this.state.newCommentText} onChange={this.handleChange} />
                        <button>&#8230;</button>
                    </form>
                </div>
            </div>
        )
    }
}

CommentMap.proptypes = {
    comment: PropTypes.object.isRequired,
}

export default CommentMap;
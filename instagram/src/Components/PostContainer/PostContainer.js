import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types';


class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.posts.comments,
            newComment: '',
            likes: props.posts.likes,
        }
    }

    commentDidMount() {
        const id = this.props.posts.timestamp;
        if (localStorage.getItem(id)) {
            this.setState({comments: JSON.parse(localStorage.getItem(id))});
        } else {
            this.setComments();
        }
    }

    setComments = () => {
        localStorage.setItem(
            this.props.timestamp,
            JSON.stringify(this.state.comments)
        );
    }

    addNewCommentHandler = event => {
        this.setState({newComment: event.target.value});
    }

    submitNewCommentHandler = event => {
        console.log(this.state.comments);
        event.preventDefault();
        const comments = this.state.comments.slice();
        console.log(comments);
        comments.push({username: 'FakeUsername', text: this.state.newComment});
        this.setState({newComment: '', comments});
        setTimeout(() => {
            this.setComments();
        }, 500);
    }

    likesCounter = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    }

    render() {
        return (
            <div className='post-container'>
                <div className='post-header'>
                    <img className='user-thumbnail' src={this.props.posts.thumbnailUrl} alt='User thumbnail'/>
                    <span>{this.props.posts.username}</span>
                </div>
                <img className='post-image' src={this.props.posts.imageUrl} alt='Instagram Post'/>
                <div className='post-content'>
                    <div className='icon-bar'>
                        <i className='far fa-heart'
                            onClick={this.likesCounter}
                        >
                        </i>
                        <i className='far fa-comment'></i>
                    </div>
                    <div className='likes-count'>
                        <span>{this.state.likes} Likes</span>
                    </div>
                    <div className='comment-container'>
                        <div className='comments'>
                            {this.state.comments.map( comment => {
                                return (
                                    <CommentSection
                                        comments={comment}
                                    />
                                );
                            })}
                        </div>
                        <div className='add-comment'>
                            <form className='form'
                                onSubmit={this.submitNewCommentHandler}
                            >
                                <input 
                                    className='input'
                                    name='newComment'
                                    placeholder='Add a comment...'
                                    type='text'
                                    value={this.state.newComment}
                                    onChange={this.addNewCommentHandler}
                                />
                            </form>
                            <span className='expandable-menu'>...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PostContainer.propTypes = {
    posts: PropTypes.shape({
        likes: PropTypes.number,
    })
}

 
export default PostContainer;
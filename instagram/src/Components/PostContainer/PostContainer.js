import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'


class PostContainer extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            comments: props.comments,
            newComment: '',
        }
    }

    addNewCommentHandler = event => {
        this.setState({newComment: event.target.value});
    }

    submitNewCommentHandler = event => {
        event.preventDefault();
        const comments = this.state.comments.slice();
        comments.push({username: 'FakeUsername', text: this.state.newComment});
        this.setState({newComment: '', comments});
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
                        <i className='far fa-heart'></i>
                        <i className='far fa-comment'></i>
                    </div>
                    <div className='likes-count'>
                        {this.props.posts.like}
                    </div>
                    <div className='comment-container'>
                        <div className='comments'>
                            {this.props.posts.comments.map( comment => {
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


 
export default PostContainer;
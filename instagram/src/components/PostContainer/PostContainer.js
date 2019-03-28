import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import './postContainer.scss';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            commenting: false,
            liked: localStorage.getItem(this.props.post.timestamp) === null ? false : (localStorage.getItem(this.props.post.timestamp) === 'true' ? true : false)
        }
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitComment = e => {
        e.preventDefault();

        const newComment = {
            username: JSON.parse(localStorage.getItem('user')).username,
            text: this.state.comment,
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
        }

        this.props.submitComment(this.props.post.timestamp, newComment);

        this.setState({ comment: '' })
    }

    render() {
        return (
            <article className='post'>
                <section className='head'>
                    <img
                        src={this.props.post.thumbnailUrl}
                        alt={this.props.post.timestamp}
                    />
                    <span>{this.props.post.username}</span>
                </section>
                <img
                    className='postImg'
                    src={this.props.post.imageUrl}
                    alt={this.props.post.timestamp}
                />
                <section className='cAndL'>
                    <i
                        onClick={() => this.setState({ liked: !this.state.liked }) & localStorage.setItem(this.props.post.timestamp, !this.state.liked)}
                        className={this.state.liked === false ? 'far fa-heart like' : 'fas fa-heart like'}
                    />

                    <i
                        onClick={() => this.setState({ commenting: !this.state.commenting })}
                        className={this.state.commenting === false ? 'far fa-comment like' : 'fas fa-comment like'}
                    />

                    <span className='likes'>{this.state.liked === false ? this.props.post.likes : this.props.post.likes + 1} likes</span>
                </section>

                <div
                    className='comments'
                    style={{ display: this.state.commenting === false ? 'none' : 'block' }}
                >
                    {this.props.post.comments.map((comment, id) => (
                        <CommentSection
                            comment={comment}
                            postIndex={this.props.index}
                            key={id}
                            deleteComment={this.props.deleteComment}
                        />
                    ))}
                    <div className='addComment'>
                        <form onSubmit={this.submitComment}>
                            <input
                                placeholder='Add a comment...'
                                name='comment'
                                value={this.state.comment}
                                onChange={this.handleChanges}
                            />
                        </form>
                        <i className='fas fa-ellipsis-h' />
                    </div>
                </div>

            </article>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string
    }),
    liked: PropTypes.bool,
    liker: PropTypes.func
}

export default PostContainer;
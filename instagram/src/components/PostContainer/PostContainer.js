import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import './postContainer.scss';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitComment = e => {
        e.preventDefault();

        const newComment = {
            username: 'random',
            text: this.state.comment,
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
        }

        this.props.submitComment(this.props.post.timestamp, newComment);

        this.setState({
            comment: ''
        })
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
                        onClick={() => this.props.liker(this.props.post.timestamp)}
                        className={this.props.liked === false ? 'far fa-heart like' : 'fas fa-heart like'} />

                    <i className='far fa-comment comment' />

                    <span className='likes'>{this.props.post.likes} likes</span>
                </section>

                <div className='comments'>{this.props.post.comments.map((comment, id) => (
                    <CommentSection
                        comment={comment}
                        key={id}
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
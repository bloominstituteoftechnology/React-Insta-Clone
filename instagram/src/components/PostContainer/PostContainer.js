import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';

import './PostContainer.css';

import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
        };
    }

    addNewComment = e => {
        e.preventDefault();

        let newComments = this.state.data;

        newComments.comments.push({
            username: 'philzcoffee',
            text: e.target[0].value,
        });

        this.setState({
            data: newComments,
        })

        e.target[0].value = "";
    }

    render() {
        const timestamp = this.props.data.timestamp.substring(0, this.props.data.timestamp.indexOf(',') - 7) + this.props.data.timestamp.substring(this.props.data.timestamp.indexOf(',') - 5);

        if (this.state.data.hidden === true) {
            return (
                null
            )
        } else {
            return (
                <section className = 'post-container-section'>
                    <div className = 'post-container-div'>
                        <div className = 'title-div'>
                            <img 
                                className = 'thumbnail-url' 
                                src = { this.props.data.thumbnailUrl } 
                                alt = 'thumbnail url' 
                            />
                            <h4>{ this.props.data.username }</h4>
                        </div>

                        <img 
                            className = 'image-url' 
                            src = { this.props.data.imageUrl } 
                            alt = 'main url' />

                        <div className = 'likes-div'>
                            <i 
                                className = 'far fa-heart' 
                                onClick = { this.props.handleLike } 
                                id = { `like-${this.props.index}` } 
                            ></i>
                            <i className="far fa-comment"></i>
                            <h4>{ this.props.data.likes } likes</h4>
                        </div>

                        { this.props.data.comments.map((comment, index) => {
                                return <CommentSection 
                                    className = 'comment-section-div' 
                                    key = { index } 
                                    comment = { comment } 
                                />
                            }) 
                        }

                        <div className = 'timestamp-div'>
                            <span>{ moment(timestamp).fromNow().toLocaleUpperCase() }</span>
                        </div>

                        <div className = 'add-a-comment-div'>
                            <form onSubmit = { this.addNewComment }>
                                <input 
                                    type = 'text' 
                                    className = 'add-a-comment-input' 
                                    placeholder = 'Add a comment...' 
                                />
                                <button type = 'submit'><i  
                                    className = 'fas fa-ellipsis-h' 
                                ></i></button>
                            </form>
                        </div>
                    </div>
                </section>
            );
        }
    }
}

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })),
    }),
}

export default PostContainer;

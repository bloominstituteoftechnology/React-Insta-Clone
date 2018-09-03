import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';

import './PostContainer.css';

import PropTypes from 'prop-types';

const PostContainer = props => {
    const timestamp = props.data.timestamp.substring(0, props.data.timestamp.indexOf(',') - 7) + props.data.timestamp.substring(props.data.timestamp.indexOf(',') - 5);

    return (
        <section className = 'post-container-section'>
            <div className = 'post-container-div'>
                <div className = 'title-div'>
                    <img 
                        className = 'thumbnail-url' 
                        src = { props.data.thumbnailUrl } 
                        alt = 'thumbnail url' 
                    />
                    <h4>{ props.data.username }</h4>
                </div>

                <img 
                    className = 'image-url' 
                    src = { props.data.imageUrl } 
                    alt = 'main url' />

                <div className = 'likes-div'>
                    <i className = 'far fa-heart'></i>
                    <i className="far fa-comment"></i>
                    <h4>{ props.data.likes } likes</h4>
                </div>

                { props.data.comments.map((comment, index) => {
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
                    <input 
                        value = { props.state.inputText } 
                        onChange = { props.handleChange } 
                        className = 'add-a-comment-input' 
                        placeholder = 'Add a comment...' 
                    />
                    <i 
                        className = 'fas fa-ellipsis-h' 
                        id = { props.submitIndex }
                        onClick = { props.handleClick } 
                    ></i>
                </div>
            </div>
        </section>
    );
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

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

    componentDidMount() {
        if (typeof(Storage) !== 'undefined') {
            if (localStorage.getItem(`postContainerState-${ this.props.index }`) !== null) {
                let newState = JSON.parse(localStorage.getItem(`postContainerState-${ this.props.index }`));

                this.setState(newState);
            }
        }
    }

    componentDidUpdate() {
        if (typeof(Storage) !== 'undefined') {
            localStorage.setItem(`postContainerState-${ this.props.index }`, JSON.stringify(this.state));
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data.hidden !== state.data.hidden) {
            let newState = state;
            newState.data.hidden = props.data.hidden;

            return newState;
        }

        return null;
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

    deleteComment = index => e => {
        e.preventDefault();
        let newState = this.state;
        newState.data.comments.splice(index, 1);

        this.setState(newState);
    }

    render() {
        const timestamp = this.state.data.timestamp.substring(0, this.state.data.timestamp.indexOf(',') - 7) + this.state.data.timestamp.substring(this.state.data.timestamp.indexOf(',') - 5);

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
                                src = { this.state.data.thumbnailUrl } 
                                alt = 'thumbnail url' 
                            />
                            <h4>{ this.state.data.username }</h4>
                        </div>

                        <img 
                            className = 'image-url' 
                            src = { this.state.data.imageUrl } 
                            alt = 'main url' />

                        <div className = 'likes-div'>
                            <i 
                                className = 'far fa-heart' 
                                onClick = { this.state.handleLike } 
                                id = { `like-${this.state.index}` } 
                            ></i>
                            <i className="far fa-comment"></i>
                            <h4>{ this.state.data.likes } likes</h4>
                        </div>

                        { this.state.data.comments.map((comment, index) => {
                                return <CommentSection 
                                    className = 'comment-section-div' 
                                    key = { index } 
                                    index = { index } 
                                    comment = { comment } 
                                    deleteComment = { this.deleteComment } 
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

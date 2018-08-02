import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';
import moment from 'moment';
import {StyledPost, 
    StyledPostImg, StyledStats} 
from './StyledPosts';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes
        };
    }

    incrementLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
        });
    };

    /* Lifecycle Methods*/

    componentWillMount() {
        localStorage.getItem(`${this.props.id} likes`) && this.setState({
          likes: JSON.parse(localStorage.getItem(`${this.props.id} likes`))
        });
    }
    
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(`${this.props.id} likes`, JSON.stringify(nextState.likes));
    }

    render() {
        return (
            <StyledPost>
                <PostHeader user={this.props.user} thumbnail={this.props.thumbnail} />
                <StyledPostImg src={this.props.img} alt="" />
                <StyledStats>
                    <div>
                        <i className="far fa-heart fa-2x" 
                        onClick={this.incrementLikes} /> 
                        &emsp; 
                        <i className="far fa-comment fa-2x" 
                            onClick={() => alert(`Sending ${this.props.user} a ping!`)} />
                    </div>
                    <p className="likes">{this.state.likes} likes</p>
                </StyledStats>
                <CommentSection
                    id={this.props.id}
                    comments={this.props.comments} 
                    time={moment(this.props.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()} />
            </StyledPost>
        );
    }
};

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    img: PropTypes.string,
    likes: PropTypes.number,
    thumbnail: PropTypes.string,
    time: PropTypes.string,
    user: PropTypes.string,
};

export default PostContainer;
import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';
import moment from 'moment'

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            thumbnail: props.thumbnail,
            img: props.img,
            likes: props.likes,
            comments: props.comments,
            time: props.time,
            id: props.id
        };
    }

    incrementLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
        });
    };

    /* Lifecycle Methods*/

    componentWillMount() {
        localStorage.getItem(`${this.state.id} likes`) && this.setState({
          likes: JSON.parse(localStorage.getItem(`${this.state.id} likes`))
        });
    }
    
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(`${this.state.id} likes`, JSON.stringify(nextState.likes));
    }

    render() {
        return (
            <div className="post">
                <PostHeader user={this.state.user} thumbnail={this.state.thumbnail} />
                <img className="post-img" src={this.state.img} alt="" />
                <div className="stats">
                    <div className="icons">
                        <i className="far fa-heart fa-2x" 
                        onClick={this.incrementLikes} /> 
                        &emsp; 
                        <i className="far fa-comment fa-2x" 
                            onClick={() => alert(`Sending ${this.state.user} a ping!`)} />
                    </div>
                    <p className="likes">{this.state.likes} likes</p>
                </div>
                <CommentSection
                    id={this.state.id}
                    comments={this.state.comments} 
                    time={moment(this.state.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()} />
            </div>
        );
    }
};

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    img: PropTypes.string,
    likes: PropTypes.number,
    thumbnail: PropTypes.string,
    time: PropTypes.string,
    user: PropTypes.string,
};

export default PostContainer;
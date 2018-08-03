import React, {Component} from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import {StyledLikes, StyledStats} from '../CommentSection/CommentSectionStyle';



class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes,
            comments: props.comments
        };
    }

    incrementLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
        });
    };

    render() {
        return (
            <div className='post-container'>
                <PostHeader thumbnail={this.props.thumbnail} user={this.props.user}/>
                <img className='ig-post-img' src={this.props.img} alt=''/>

                <StyledStats>
                    <div className='icons'>
                        <i className="far fa-heart fa-2x" onClick={this.incrementLikes} /> 
                        &emsp; 
                        <i className="far fa-comment fa-2x" 
                            onClick={() => alert(`Sending ${this.state.user} a ping!`)} />
                    </div>
                </StyledStats>

                <StyledLikes>{this.state.likes} likes</StyledLikes>
                <CommentSection 
                    comments={this.state.comments}
                    time={this.state.time}
                />
            </div>
        );
    }
};

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailURL: PropTypes.string,
    timestamp: PropTypes.string,
    username: PropTypes.string,
};


export default PostContainer;
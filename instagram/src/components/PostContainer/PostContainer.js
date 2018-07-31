import React, {Component} from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            thumbnail: props.thumbnail,
            img: props.img,
            likes: props.likes,
            comments: props.comments,
            time: props.time,
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
                <PostHeader thumbnail={this.state.thumbnail} user={this.state.user}/>
                <img className='ig-post-img' src={this.state.img} alt=""/>
                <div className='stats'>
                    <div className='icons'>
                        <i className="far fa-heart fa-2x" onClick={this.incrementLikes} /> 
                        &emsp; 
                        <i className="far fa-comment fa-2x" 
                            onClick={() => alert(`Sending ${this.state.user} a ping!`)} />
                    </div>
                    <p className='likes'>{this.state.likes} likes</p>
                </div>
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
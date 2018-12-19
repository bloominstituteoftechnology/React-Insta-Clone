import React from 'react';
import CommentSectionContainer from '../commentSection/CommentsSectionContainer';
import PropTypes from 'prop-types';
import './post.css'
import LikeSection from './LikeSection'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.userName.likes
        };

    }
    incrementLikes = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };
    render() {
        return (
            <div className='postContainer' >
                <div className='userContainer'>
                    <img src={this.props.userName.thumbnailUrl} alt='user profile' className='profileImage' />
                    <h3 className='username'>{this.props.userName.username}</h3>
                </div>
                <img src={this.props.userName.imageUrl} alt='user post' />
                <LikeSection incrementLike={this.incrementLikes} likes={this.state.likes} />
                <CommentSectionContainer
                    postId={this.props.userName.imageUrl}
                    comments={this.props.userName.comments}
                />

            </div>
        );
    }
}

Post.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}


export default Post;


import React from 'react';

import CommentSection from './CommentSection';

class PostContainer extends React.Component {
    state = {
        likes: this.props.likes,
        liked: false,
    }
    like = () => {
        let newLikes = this.state.likes;
        if (this.state.liked === true) {
            newLikes--;
        } else {
            newLikes++;
        }
        this.setState({liked: !this.state.liked, likes: newLikes});
    }
    render() {
        const likeHeart = this.state.liked ? <img className ='heart-action' src={require('../assets/icons/heart-active.png')} alt='broke' /> : <img className ='heart-action' src={require('../assets/icons/heart.png')} alt='broke' />
        return (
            <div className='post'>
                <div className='post-name-section'>
                    <div className='profile-pic'></div>
                    <div className='username'> {this.props.username} </div>
                </div>
                <div><img className='post-img' src={this.props.imageUrl} alt='broke'/></div>
                <div className='post-options'>
                    <div className='post-options-left'>
                        <div onClick={this.like} >{likeHeart}</div>
                        <div><img className='comment-action' src={require('../assets/icons/comment.png')} alt='broke' /></div>
                    </div>
                    <div><img className='bookmark' src={require('../assets/icons/Bookmark.png')} alt='broke' /></div>
                </div>
                <div className='likes'> {this.state.likes} {'likes'}</div>
                <CommentSection comments={this.props.comments} timestamp={this.props.timestamp} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default PostContainer;
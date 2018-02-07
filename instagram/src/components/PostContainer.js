import React from 'react';

import CommentSection from './CommentSection';

class PostContainer extends React.Component {
    state = {
        liked: false,
    }
    like = () => {
        this.setState({liked: !this.state.liked});
    }
    render() {
        const likeHeart = this.state.liked ? <img src={require('../assets/icons/heart-active.png')} alt='broke' /> : <img src={require('../assets/icons/heart.png')} alt='broke' />
        return (
            <div>
                <div> {this.props.username} </div>
                <img src={this.props.imageUrl} alt='broke'/>
                <div> <div onClick={this.like} >{likeHeart}</div> <img src={require('../assets/icons/comment.png')} alt='broke' /> </div>
                <div> {this.props.likes} </div>
                <CommentSection comments={this.props.comments} timestamp={this.props.timestamp}/>
            </div>
        )
    }
}

export default PostContainer;
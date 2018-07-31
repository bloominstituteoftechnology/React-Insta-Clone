import React, { Component } from 'react';
import LikesSection from './likesection';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            likes: props.data.likes
        }
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-start justify-content-start">  
                <h2 className="header d-flex align-items-center justify-content-center"><img className="thumbnail-img" src={this.state.data.thumbnailUrl} alt=""/><span className="username username-header">{this.state.data.username}</span></h2>
                <img className="post-img" src={this.state.data.imageUrl} alt=""/>
                <LikesSection incrementLike={this.incrementLike} likes={this.state.likes}/>
            </div>
        );
    }
}

export default Post;


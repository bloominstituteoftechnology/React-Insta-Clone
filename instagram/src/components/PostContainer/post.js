import React, { Component } from 'react';
import LikesSection from './likesection';
import styled from 'styled-components';

const PostImg = styled.img `
    width: 100%;
`;

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            likes: props.data.likes,
            liked: false
        }
    }

    incrementLike = () => {
        let likes = this.state.likes;
        let checked = this.state.liked;
        checked = !checked;
        if(checked === false) {
            likes = likes - 1;
            console.log(likes);
        } else {
            likes = likes + 1;
            console.log(likes);
        }
        
        this.setState({liked: checked, likes: likes});
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-start justify-content-start">  
                <h2 className="header d-flex align-items-center justify-content-center"><img className="thumbnail-img" src={this.state.data.thumbnailUrl} alt=""/><span className="username username-header">{this.state.data.username}</span></h2>
                <PostImg src={this.state.data.imageUrl} alt=""/>
                <LikesSection incrementLike={this.incrementLike} likes={this.state.likes} liked={this.state.liked}/>
            </div>
        );
    }
}

export default Post;


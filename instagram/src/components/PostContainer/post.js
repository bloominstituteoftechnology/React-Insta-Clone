import React, { Component } from 'react';
import LikesSection from './likesection';
import styled from 'styled-components';

const PostImg = styled.img `
    width: 100%;
`

const PostHeader = styled.h2`
    margin: 15px 15px;
`

const UserThumb = styled.img`
    width: 30px;
    border-radius: 50%;
`

const UsernameHeader = styled.span`
    font-size: 16px;
    margin-left: 5px;
    font-weight: bold;
`


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
                <PostHeader className=" d-flex align-items-center justify-content-center">
                    <UserThumb src={this.state.data.thumbnailUrl} alt=""/>
                    <UsernameHeader>
                        {this.state.data.username}
                    </UsernameHeader>
                </PostHeader>
                <PostImg src={this.state.data.imageUrl} alt=""/>
                <LikesSection incrementLike={this.incrementLike} likes={this.state.likes} liked={this.state.liked}/>
            </div>
        );
    }
}

export default Post;


import React, { Component } from 'react';
import LikeSection from './LikeSection';
import styled from 'styled-components';

const PostImage = styled.img`
    width: 100%;
`

const PostHeader = styled.h2`
    margin: 10px 10px;
`

const UserThmbNail = styled.img`
    width: 30px;
    border-radius: 50%;
`

const UserNameHeader = styled.span`
    font-size: 18px;
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
        if (checked === false) {
            likes = likes - 1;
            console.log(likes);
        } else {
            likes = likes + 1;
            console.log(likes);
        }

        this.setState({ liked: checked, likes: likes });
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center">
                <PostHeader className=" d-flex align-items-center justify-content-center">
                    <UserThmbNail src={this.state.data.thumbnailUrl} alt="" />
                    <UserNameHeader>
                        {this.state.data.username}
                    </UserNameHeader>
                </PostHeader>
                <PostImage src={this.state.data.imageUrl} alt="" />
                <LikeSection incrementLike={this.incrementLike} likes={this.state.likes} liked={this.state.liked} />
            </div>
        );
    }
}

export default Post;
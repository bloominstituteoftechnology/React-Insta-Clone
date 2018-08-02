import React, { Component } from 'react';
import styled from 'styled-components';


const PostWrap = styled.div`
    display: flex;
    flex-direction: column;

`    
const PostHeader = styled.div`
        display: flex;
        align-items: center;
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 1.6rem;
        font-weight: bold;
`
const Thumbnail = styled.div`
    > img {
        width: 30px;
        margin-left: 15px;
        margin-right: 15px;
        border-radius: 50%;
    }
`
const CommentIcons = styled.div`
    display: flex;
    max-width: 75px;
    justify-content: space-between;
`
const Likes = styled.div`
    font-size: 1.2rem;
        
`


class Post extends Component {
    
    render() { 
        return ( 
            <PostWrap>
                <PostHeader>
                    <Thumbnail>
                    <img src={this.props.thumbnailUrl} alt=""></img>
                    </Thumbnail>
                    {this.props.username}
                </PostHeader>
                
                <div>
                    <img src={this.props.imageUrl} alt="" />
                        <CommentIcons>
                            <i className="far fa-heart fa-3x" onClick={this.props.increaseLike}></i>
                            <i className="far fa-comment fa-flip-horizontal fa-3x"></i>
                        </CommentIcons>
                        <Likes>{this.props.likes} likes</Likes>
                </div>
                
            </PostWrap>
         );
    }
}
 
export default Post;
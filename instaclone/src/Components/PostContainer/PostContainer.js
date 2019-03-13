import React from 'react';
//import './PostContainer.css'
import styled from 'styled-components';

import CommentSection from '../CommentSection/CommentSection';
import UserInfo from '../UserInfo/UserInfo';

import {FaRegComment, FaRegHeart, FaHeart}  from 'react-icons/fa'
import { IconContext } from "react-icons";

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin:3rem 0rem;

    /* temporary */
    max-width: 640px;

    border: 1px solid #AB7C94;
    border-radius:5px;
`
const PostImage = styled.img`
    width:100%;
`
const CommentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.5rem;
    margin-top: 1rem;
`
const IconContainer = styled.div`
    > *{
        margin-right: 1rem;
        &:hover{
        cursor: pointer;
        }
    }
`
const Likes = styled.p`
    font-weight: bold;
    margin: .5rem 0rem;
`

/*
kept to display that I can compose the icons from the other library
const StyledComment = styled(FaRegComment)`
    &:hover{
        cursor: pointer;
    }
`
*/

class PostContainer extends  React.Component {
    constructor(props){
        super(props)
        this.state={
            liked:false
        };
    }

    toggleLiked = event =>{
        if(!this.state.liked){
            this.setState({liked: true})
            this.props.updateLikes(this.props.index,true);
        }else{
            this.setState({liked: false})
            this.props.updateLikes(this.props.index,false);
        }
        
    }


    render(){ 
        return (
            <PostWrapper>
                <UserInfo thumbnailUrl={this.props.post.thumbnailUrl} username={this.props.post.username} />
    
                <div>
                    <PostImage src={this.props.post.imageUrl} alt=""/>
                </div>
    
                <CommentsWrapper>
                    <IconContainer>
                        <IconContext.Provider value={{ size: "1.5rem"}}>
                            {this.state.liked === false? <FaRegHeart onClick={this.toggleLiked} />:<FaHeart onClick={this.toggleLiked} /> }
                            <FaRegComment />
                        </IconContext.Provider>
                    </IconContainer>

                    <Likes>{this.props.post.likes} likes</Likes>

                    <CommentSection 
                        comments={this.props.post.comments} 
                        timestamp={this.props.post.timestamp} 
                        index={this.props.index}
                        updateComments={this.props.updateComments}
                    />
                </CommentsWrapper>
                
            </PostWrapper>
        ); 
    }
}
 
export default PostContainer;
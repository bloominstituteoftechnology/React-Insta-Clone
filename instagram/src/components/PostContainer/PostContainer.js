import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from '../PostHeader/PostHeader';
import LikesBar from '../LikesBar/LikesBar';
import NewCommentSection from '../NewCommentSection/NewCommentSection';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const WrapperDiv = Styled.div`
    border:1px solid #ccc; 
`
const PostTimeStamp = Styled.p`
    margin-left:15px;
    margin-top:10px;
    font-size:.8rem;
    color:gray;
    margin-bottom:5px;
`
const PostImage = Styled.img`
    width: 100%;
    height:auto;
`


class PostContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comments:props.data.comments,
            likes:props.data.likes
        }
    }
    handleLikeClick = event =>{
        this.setState({likes: (this.state.likes+1)})
    }    
    render(){
        return(
            <WrapperDiv>
                <PostHeader data={this.props.data}/>
                <PostImage alt='mainpostimage' src={this.props.data.imageUrl}></PostImage>
                <LikesBar 
                    handleLikeClick={this.handleLikeClick}
                    likes={this.state.likes} />
                {
                    this.state.comments.map(element =>{
                        return (
                            <CommentSection 
                                    data={element}
                                    removeComment = {this.props.removeComment}
                            />
                        )
                    })
                }
                <PostTimeStamp>{this.props.data.timestamp}</PostTimeStamp>
                <NewCommentSection 
                                postId = {this.props.postId}
                                addNewComment={this.props.addNewComment}
                                handleCommentChange={this.props.handleCommentChange}
                                handleLikeClick = {this.handleLikeClick}
                                newComment={this.props.newComment}
                                
                />
                <br />
                <br />
            </WrapperDiv>
    
        )
            
    }
}


PostContainer.propTypes={
    data:PropTypes.object,
}

export default PostContainer;


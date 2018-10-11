import React from 'react';
import PropTypes from "prop-types";
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../AddComment/AddComment';
import styled from 'styled-components';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            commentInputValue: '',
            comments: this.props.comments,
            likes: this.props.likes
        }
    }

    //set commentInputValue in state to what the user types in comment bar
    inputHandler = (event) => {
        event.preventDefault();
        this.setState({
          commentInputValue: event.target.value
        })
      }
    
    //concat the new comment with the username to the comments value in state
      submitHandler = (event) => {
        event.preventDefault();
        let newComment = this.state.commentInputValue;
        this.setState({
            comments: this.state.comments.concat({username: 'Brandon', text: newComment }),
            commentInputValue: ''
        })
      }

    //increment likes in state
      likeHandler = () => {
          let addLike = this.state.likes
          this.setState({
            likes: ++addLike
          })
          
      }

    render() {
        return (
        <PostContainerParent>
            <div>
                <PostHeader>
                    <UserIcon src={this.props.icon} alt='userIcon'/> {this.props.username}
                </PostHeader>

                <div>
                    <PostImg src={this.props.image} alt="postImage" />
                </div>

                <Likes>
                    <div>
                    <i className="far fa-heart" onClick={this.likeHandler}></i>
                    <i className="far fa-comment"></i>
                    </div>
                    {this.state.likes} Likes
                </Likes>  
            </div>
            
            <div className="commentContainer">
                {this.state.comments.map(comment => {
                    return (
                        <div>
                            <CommentSection
                                username={comment.username}
                                text={comment.text}
                            />
                        </div>
                    )
                })}
            
            </div>

            <CommentContainer>
                <AddComment 
                    id={this.props.timestamp}
                    inputHandler={this.inputHandler}
                    submitHandler={this.submitHandler}
                    commentInputValue={this.state.commentInputValue}
                />
            </CommentContainer>
            
        </PostContainerParent>
        )

    }
};

PostContainer.propTypes ={
    key: PropTypes.string,
    username: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.string,
    inputHandler: PropTypes.func,
    submitHandler: PropTypes.func,
};

const PostContainerParent = styled.div`
    width: 604px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    margin: 20px auto;
`

const PostHeader = styled.div` 
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    padding-left: 10px;
    margin-bottom: 5px;
`

const UserIcon = styled.img` 
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 8px;
`

const PostImg = styled.img`
    width: 100%;
`

const Likes = styled.div`
    font-weight: bold;
    margin-left: 10px;  
`

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 584px;
    border-bottom: 1px solid lightgray;
`

export default PostContainer;
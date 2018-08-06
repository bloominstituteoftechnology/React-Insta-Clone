import React from 'react';
import PropTypes from 'prop-types';
import Comment from "./Comment.js";
import moment from 'moment';
import styled from "styled-components"

const StyledPostBot = styled.div`
    margin-bottom: 10px;
    margin-top: 10px;
    padding-left: 15px;
`;

const StyledBotIcons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 65px;
    margin-bottom: 10px;
    .fas {
        color: rgb(16, 186, 238);
    }
    i {
        font-size: 25px;
    }
    `;

const StyledPostLikes = styled.div`
    font-weight: bold;
    font-size: 14px;
    `;

const StyledPostTimestamp = styled.div`
    margin-top: 10px;
    padding-left: 15px;
    font-size: 12px;
    `;    

const StyledCommentInput = styled.input`
    width: 99.6%;
    height: 80px;
    margin-bottom: 20px;
    margin-top: 15px;
    `    ;


class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentState: props.com.comments,
            input: "",
            likes: props.com.likes,
            time: props.com.timestamp,
            liked: false
        }
    }

    toggleLike = () => {
        let likesCopy = this.state.likes;
        if (this.state.liked === false ) {
            likesCopy++
            this.setState({likes: likesCopy, liked: true})
        } else {
            likesCopy--;
            this.setState({likes: likesCopy, liked: false})
        }
    }

    addNewComment = (event) => {
        if (event.key === "Enter") {
            const commentSlice = this.state.commentState.slice();
            commentSlice.push({
                username: "NaazButtzZzzNToes",
                text: this.state.input
            });

            this.setState({ commentState: commentSlice });
            this.setState({ input: "" });
        };
    }

    saveComment = (event) => {
        this.setState({ input: event.target.value });
    }

    

    render() {
        const time = moment(this.props.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()
        return (
            <div>

                <StyledPostBot>
                    <StyledBotIcons>
                        <i className={this.state.liked ? "fas fa-heart" : "far fa-heart"} onClick={this.toggleLike}></i>
                        <i className="far fa-comment"></i>
                    </StyledBotIcons>
                    <StyledPostLikes>{this.state.likes + " likes"} </StyledPostLikes>
                </StyledPostBot>



                {this.state.commentState.map(item => <Comment com={item} />)}
                
                <StyledPostTimestamp>{time}</StyledPostTimestamp>
                <StyledCommentInput value={this.state.input} onChange={this.saveComment} onKeyPress={this.addNewComment} placeholder="Add a comment..." />

            </div>

        );
    }
}
CommentSection.propTypes = {
    comments: PropTypes.array
}

export default CommentSection;
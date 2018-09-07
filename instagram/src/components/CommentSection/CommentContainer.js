import React from 'react';
import Comment from './Comment';
import Timestamp from './Timestamp';
import CommentInput from './CommentInput';
import styled from 'styled-components';

const CommentCContainer = styled.div`
    max-width: 73%;
    margin-left: 13.5%;
    margin-bottom: 20px;
    border: 1px solid lightgrey;
`;

const CommentContainerIcons = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: 2.5%;
`;

const CommentContainerLikes = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: 2.5%;
    font-weight: bold;
`;

const LikeSectionDiv = styled.div`
  height: 10px;
  width: 10px;
  margin: 10px;
  padding-bottom 15px;
`;

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            timestamp: props.timestamp,
            newComment: "",
            likes: 0
        };
    }

    addNewComment = event => {
        event.preventDefault();

        this.setState({
            comments: [
                ...this.state.comments,
                { username: "User", text: this.state.newComment }
            ],
            newComment: ""
        });
        event.target.reset();
        console.log(this.state.comments);
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addLikes = event => {
        event.preventDefault();
        this.setState({ likes: this.state.likes + 1 })
    }

    render() {
        return (
            <CommentCContainer>
                <CommentContainerIcons>
                    <LikeSectionDiv onClick={this.addLikes}>
                        <i className="far fa-heart" />
                    </LikeSectionDiv>

                    <LikeSectionDiv>
                        <i className="far fa-comment"></i>
                    </LikeSectionDiv>
                </CommentContainerIcons >

                <CommentContainerLikes>
                    {this.state.likes} likes
                </CommentContainerLikes>

                {this.state.comments.map((comment, index) => {
                    return (
                        <div key={index}>
                            <Comment
                                comment={comment}
                            />
                        </div>
                    )
                })}

                <Timestamp
                    timestamp={this.state.timestamp}
                />

                <CommentInput
                    addNewComment={this.addNewComment}
                    handleChanges={this.handleChanges}
                />
            </CommentCContainer>
        )
    }
}

export default CommentContainer;
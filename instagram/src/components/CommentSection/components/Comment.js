import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
const Commented = styled.div`
    width: 100%;
    line-height: 2;
    display: flex;
    justify-content: space-between;
`;
const Inputs = styled.div`
    display:flex;
`;
const CommentUser = styled.div`
    font-weight: bold;
    padding-right: 10px;
`;
const Delete = styled.button`
    border: none;
    background-color: white;
    padding-right: 50px;
`;
const TimeStamp = styled.div`
    font-size: 12px;
    float:left;
    margin-top: 10px;
`;
const AddaComment = styled.form`
    width: 100%;
    border-top: 1px solid lightgray;
    margin-top: 10px;
`;
const AddaCommentInput = styled.input`
    border: none;
    color: darkgray;
    width: 100%;
`;

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newData: '',
        };
    }
    addComment = event => {
        event.preventDefault();
        this.setState({
          comments: [
            ...this.state.comments,
                { username: "me",
                text: this.state.newData }
          ],
          newData: '',
        })
      }
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value})
    }
    removeComment = event => {
        console.log("it does something");
        event.preventDefault();
        this.setState({
            comments: this.state.comments.filter((item) => {
                if (item.username === 'me') {
                    return null;
                } else {
                    return item;
                }
            })
        })
    }
    render() {
        return(
        <CommentContainer>
        {this.state.comments.map((item, index) => {
            return (
                <Commented key={index}>
                <Inputs>
                    <CommentUser>{item.username}</CommentUser>
                    <div className="text">{item.text}</div>
                </Inputs>
                    <Delete onClick={this.removeComment}>delete comment</Delete>
                </Commented>
            )
        })}
            <TimeStamp>6 hours ago</TimeStamp>
            <AddaComment onSubmit={this.addComment}>
                <AddaCommentInput 
                type="text" 
                placeholder="Add a comment . . ."
                name="newData"
                onChange={this.changeHandler}
                value={this.newData}
                ></AddaCommentInput>
            </AddaComment>
        </CommentContainer>
        )}
}

Comment.propTypes = {
    input: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};
 
export default Comment;

import React from 'react';
import CommentInput from './CommentInput';
import Styled from 'styled-components';
import Emoji from 'react-emoji-render';


const Comment = Styled.p`
display: block;
text-align: left;
align-items: center;
margin: 5px 16px;
font-size: 14px;
`;

const User = Styled.span`
font-weight: bold;
`;

const CommentText = Styled.span`
margin-top: 10px;

`;

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }



  handleComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = (event) => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: window.localStorage.getItem('username') };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  }

  render() {
    return (
        <div>
            <div>
           {this.state.comments.map(item => {
              return (<Comment postId={item.imageUrl}><User key={Math.random()}>{item.username} </User> 
              <CommentText Emoji text={item.text} key={Math.random()}><Emoji text={item.text} /></CommentText></Comment>)
          })}
          <CommentInput  handleComment={this.handleComment} addComment={this.addComment} comment={this.state.comment} />
          </div>
          </div>

    );
};
}

export default Comments;


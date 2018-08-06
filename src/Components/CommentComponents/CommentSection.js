import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';
import { CommentWrapper, IconBar, CommentLikes,
          CommentForm, DividingLine, CommentTime,
          CommentTextBox, CommentInput } from './CommentStyle';
import moment from 'moment';

import CommentDisplay from './CommentDisplay';

class CommentSection extends React.Component{
  constructor(props){
    super(props);
    this.state={
      comments: props.comments,
      time: props.timestamp,
      likes: props.likes,
      addingComment: false,
      liked: props.liked,
      username: props.username,
      id: props.id,
    }
  }

  componentDidMount(){
    let idString = this.state.id.toString();
    if(localStorage.getItem(idString)){
      this.setState({comments: JSON.parse(localStorage.getItem(this.state.id))});
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    let newComments = this.state.comments.slice();
    if(event.target.comment.value){
      newComments.push({
        username: this.state.username,
        text: event.target.comment.value,
      });
      let idString = this.state.id.toString();
      localStorage.setItem(idString, JSON.stringify(newComments));
      this.setState({
        comments: newComments,
        addingComment: false,
      });
    }
  }

  handleLiking = () =>{
    let newNumber = this.state.likes + (this.state.liked ? -1 : 1);
    this.setState({
      likes: newNumber,
      liked: !this.state.liked,
    });
  }

  render(){
    let color = this.state.liked ? 'active' : '';
    return(
      <CommentWrapper>
        <IconBar>
          <i className={`far fa-heart icon-bar-icon ${color}`} onClick={this.handleLiking}></i>
          <i className="far fa-comment icon-bar-icon icon-flipped"></i>
        </IconBar>
        <CommentLikes><strong>{this.state.likes} likes</strong></CommentLikes>
        {this.state.comments.map(comment => <CommentDisplay comment={comment} />)}
        <CommentTime>{moment(this.state.time, 'MMM Do YYYY h:mm:ss').fromNow()}</CommentTime>
        <DividingLine />
        {this.state.addingComment ?
          <CommentForm onSubmit={this.handleSubmit}>
            <CommentInput onBlur={()=>this.setState({addingComment: false})} type="text" name="comment" autoFocus />
          </CommentForm> :
          <CommentTextBox onClick={()=> this.setState({addingComment: true})}>Add a comment...</CommentTextBox>}
      </CommentWrapper>
    )
  }
};

CommentSection.defaultProps = {
  liked: false,
}

CommentSection.propTypes = {
  likes: PropTypes.number,
  text: PropTypes.string,
  username: PropTypes.string,
  liked: PropTypes.boolean,
}

export default CommentSection;

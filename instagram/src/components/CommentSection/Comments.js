import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from "prop-types";
import './Comment.css';
//import CommentForm from '../CommentForm/CommentForm';

class Comments extends Component {
  constructor(props){
    super(props)
    this.state = {  
      comments:this.props.comments,
      value :''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      value:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const comment ={
      username:"doobee46",
      text:this.state.value
    }
    this.setState({
      value:'',
      comments: [...this.state.comments, comment]
    })
  }

  render() { 
    console.log(this.state.comments)
    return (
      <div className="comment">
      {this.state.comments.map(comment =>{
        return[
        <p key={comment.username}>{comment.username}<span>{comment.text}</span></p>
        ]
      })
      }
      <div className="form-container">
        <Moment className="timestamps"fromNow ago>2018-09-20</Moment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          value={this.state.value}
          placeholder="add comment ..."
          onChange ={this.handleChange}
          />
        </form>
      </div>
      </div>
    );
  }
}

Comments.propTypes = {
  comments:PropTypes.arrayOf(PropTypes.shape({
    username:PropTypes.string,
    text:PropTypes.string
  })).isRequired
};


export default Comments;
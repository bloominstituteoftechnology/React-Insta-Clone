import React, { Component } from "react";
import dots from "./dots.svg"

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: '',
            comments: []
          };
    }

    componentDidMount() {
        this.setState({comments: this.props.comments });
      }

      handleAddComment = e => {
        this.setState({ [e.target.name] : e.target.value });
      }

    /*  handleKeyPress = (e) => {
        if(e.key == 'Enter'){
            this.handleAddComment;
        }
      }

       onKeyPress={this.handleKeyPress} <--goes in render input function
     Tried to implement on keypress enter */

      
  handleSubmitComment = () => {
    const { comments } = this.state;
    comments.push({
      username: "Cris_cookie_",
      text: this.state.newComment
    });
    this.setState({ comments, newComment: '' });
  }

    render() {
        return(
        <div>
           {this.props.comments.map(comment => (
               <div className = "comments">
                   <div className="comments__User">{comment.username} <span className="comments__Text">{comment.text}</span></div>
               </div>
           ))}

           <div className="comments__time">{this.props.time}</div>
           <div className = "comment__border"></div>
           <div className="comment__Input-container">
           <input className="comment__Input" type="text" name="newComment" onChange={this.handleAddComment} value={this.state.newComment} placeholder="Add a comment...."/>
           <button className="comment__button" onClick={this.handleSubmitComment}>Add</button>
           <img src={dots} className="comment__dots"/>
           </div>
        </div>
        )
    }
}

export default CommentSection
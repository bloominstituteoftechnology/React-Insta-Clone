import React, { Component } from "react";
import dots from "./dots.svg"

class CommentSection extends Component {
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
           <input className="comment__Input" type="text" placeholder="Add a comment...."/>
           <img src={dots} className="comment__dots"/>
           </div>
        </div>
        )
    }
}

export default CommentSection
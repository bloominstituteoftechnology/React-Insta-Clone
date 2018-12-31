import React from "react";

import Comment from "./../Comment/Comment"
import PropTypes  from "prop-types";

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments:this.props.comments,
            commentText : ""
        }
    }




    addNewComment = event => {
        event.preventDefault();
        console.log("Comment added");
        const addedComment = {text: this.state.commentText, username: "Arpita Sinha"}
        const newComments = this.state.comments.slice();
        newComments.push(addedComment);
        this.setState({comments: newComments});
    }

    commentInput = event => {
        this.state.commentText = event.target.value;
    }

    render () {
        return (
            <div>
                {
                    this.state.comments.map(comment => {
                        return <Comment key={comment.id} comment={comment}/>
                    })
                }
                <form className="form1" onSubmit={this.addNewComment}>
                    <input type="text" value={this.state.value}
                           placeholder="Write a Comment..." onChange={this.commentInput}/>
                    <button type="submit" className="add" > Add Comment</button>
                </form>
            </div>
        );

    }
}

export default CommentSection
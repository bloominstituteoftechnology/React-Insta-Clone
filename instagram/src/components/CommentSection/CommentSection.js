import React, { Component }  from 'react';
import Comment from './Comment'
import AddComment from './AddComment'

class CommentSection extends Component  {
    constructor(props) {
		super(props);
        this.state = { 
            comments: props.comments,
            comment: ''
        }
    }

    inputComment = event => {
        this.setState({ comment: event.target.value });
      };

    handleInputComment=(event)=>{
		event.preventDefault();
        const newComment={ username: 'blkfltchr', text: this.state.comment };
        const comments = this.state.comments.slice();
        comments.push(newComment);
		this.setState({comments, comment: ''});
	}
	
    handleInputComment =(event)=>{
		this.setState({comment: event.target.value});
	}

    render() {
    return (
    
    <div>
        <div>
            {this.state.comments.map(comment => (
            <Comment comment={comment} key={Math.random()} />
        ))}
        </div>
        <div>
            <AddComment
                
            comment={this.state.comment}
            inputComment={this.handleInputComment}
            submitComment={this.handleSubmitComment}
             />
        </div>
    </div>
  );
};

}

export default CommentSection;

import React, {Component} from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import PropTypes from "prop-types";

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: ""
        }    
    }


    addNewComment = event => {
        event.preventDefault();
        this.setState(
            {
                comments: [...this.state.comments, {text: this.state.newComment, username: "NewUserName"}],
                newComment: ""
            }
        );
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            console.log(this.state.newComment);
        }); 
    };

    render() {
        return (
                <div>
                    {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                    <NewComment addComment={this.addNewComment} handleChange={this.handleChange} newComment={this.state.newComment}/>
                </div>
            );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };
  
  export default CommentSection;
  
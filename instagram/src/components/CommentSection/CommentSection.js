import React, {Component} from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import PropTypes from "prop-types";
import './CommentSection.css';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: "",
            likes: 0
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
        event.target.reset();
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            console.log(this.state.newComment);
            
        }); 
    };

    increaseLikes = event => {
        event.preventDefault();
        let newLikes = this.state.likes + 1;
        this.setState({likes: newLikes});
      }

    

    render() {
        return (

                <div>
                    {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                    <NewComment addNewComment={this.addNewComment} handleChange={this.handleChange}/>
                    <img  src={require('./h.png')} className='likes' onClick={this.increaseLikes} />
                    <span>{this.state.likes}</span>
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
  
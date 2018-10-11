import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'
import InputComment from './InputComment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.commentInfo,
            newComment: ''
        }
    }

    changeHandler = event => {
        event.preventDefault();
        // console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
      };
    

    addNewComment = (event, id) => {
    event.preventDefault();
    console.log(id);
    event.target.value = ""
    this.setState({
      comments: [
        ...this.state.comments,
        { username: "Troy", text: this.state.newComment},

      ],
      
      newComment: "",
      
    })
    
  }

    render() {
        console.log(this.state.comments);
        return(
            <div className = "comment-section-cont">
            <div>{this.state.comments.map((comment, id) => {
                
                return <div
                key={id}
                className={comment.username}

                >
                    
                    <div className = "comment-box">
                        <h4 className = "username-comment">{comment.username}</h4>
                        <p className = "username-text">{comment.text}</p>
                    </div>

                    

                </div>
            })}</div>
                    <InputComment
                    addNewComment = {this.addNewComment}
                    newComment = {this.state.newComment}
                    changeHandler = {this.changeHandler}
                    />
        </div>
        )
    }
}




CommentSection.propTypes = {
    // postInfo: 
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })),
    }

export default CommentSection
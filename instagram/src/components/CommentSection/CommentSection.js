import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comments: props.comments,
            comment: "",
        }
    }

    handleChange = (e) => {
        this.setState({comment: e.target.value})
    }

    addNewComment = (e) => {
        e.preventDefault();
        const newComment={text: this.state.comment, username:"jeanfern"}
        const comments=this.state.comments.slice();
        comments.push(newComment)
        this.setState({comments, comment:""})
       
        }
        
    render() {
        return (
            <div className="comment-section-container">

                {this.state.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
                <CommentInput 
                comment={this.state.comment} 
                submitComment={this.addNewComment} 
                changeComment={this.handleChange}/>
            </div>
        )
    }
}

 CommentSection.propTypes = {
        comments: PropTypes.arrayOf(
          PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
        )
      };

export default CommentSection;
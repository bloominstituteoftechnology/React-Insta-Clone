import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';


class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments, //this is where we pull in the comments stored in dummyData
            comment: ""  //space to hold new comments
        };
    }


  commentHandler = event => {
      this.setState({ comment: event.target.value });
  }  


  commentSubmit = event => {
    //prevents automatic page refresh
    event.preventDefault();
    //build out our new comment object
    const newComment = { text: this.state.comment, username: "Harry Potter"};
    //clone the comments array
    const comments = this.state.comments.slice();
    //push new comment object into cloned comments
    comments.push(newComment);
    // set new clonse as state ... + reset our comment string
    this.setState({ comments: comments, comment: ""});
}



    render(){
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key = {i} comment = {c} />)}
                <CommentInput 
                    changeHandler = {this.commentHandler}
                    submitHandler = {this.commentSubmit}
                    comment = {this.state.comment}
                    />
            </div>

        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
};

export default CommentSection;
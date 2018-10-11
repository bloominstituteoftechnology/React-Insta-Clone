import React from 'react';
import PropTypes from 'prop-types';
import './commentSection.css';
import Comments from './Comments';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    addComment = event => {
        event.preventDefault();
        console.log("are we getting to addComment?");
        const comments = this.state.comments.slice();
        const newComment = 
        comments.push()
          this.setState({
            comments, comment: ''
          });
      };
    
      handleInput = event => {
        console.log("Im the handle!");
        this.setState({
          comments: event.target.value//this makes it so each letter entry is added to state [], making it possible to type
        });
      };
    
    render() {
        return (
            <div>{this.state.comments.map((each) => <Comments key={each.text} comments={each} />)}
                 <AddComments inputComments={this.state.inputComments} />
                <CommentInput 
                    addComment={this.addComment}
                    handleInput={this.handleInput}
                    comment={this.state.comment}
                />
            </div> 
        );  
    };
}
    

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
};
 export default CommentSection;
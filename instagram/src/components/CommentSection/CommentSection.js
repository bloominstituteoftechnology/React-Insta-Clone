import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import CommentInput from './CommentInput';




class CommentSection extends React.Component {
    constructor(props) { //recieves props from state on App.js
        super(props);
        this.state = {
            comments: props.comments, //gets comments from state as props
            comment: ''
        };
    }
    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => <Comments key = {index} comment ={comment} />)}
                <CommentInput 
                comment = {this.state.comments} />
            </div>
        )
    }
}

    
export default CommentSection;

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
};


//when building out comments, insert <CommentInput /> after <Comments />
// import CommentInput from '.CommentInput';
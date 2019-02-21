import React from 'react';
import Comment from './Comment';

import CommentInput from './CommentInput';


class CommentContainer extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                comment: "",

                comments: props.comments
        }
    }
        //--- forgot syntax, look up
    changeTheComment = e => {
        this.setState({comment: e.target.value});
    };
    
    submitNewComment = e => {
        e.preventDefault();
        const newComment = {text: this.state.comment, username: ""};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: ''})

    };
    
    //changeTheComment -function to handle changes takes in event returns this.setState ({comment: e.target.value})
    // submitNewCommint adding a comment funtion, handles submission, use slice on the default this.state.comment, and than comments.push(thenewcomment);, than reset this.setstate({comments, comment: ""})
    render(){
        return(
            <div className="comments">
                {this.state.comments.map((c,i) => (<Comment key = {i} comment = {c} />))}
            
                <CommentInput comment={this.state.comment}
                change={this.changeTheComment}
                submit={this.submitNewComment}
                />

            </div>
        )
    }
}

CommentContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};


export default CommentContainer;
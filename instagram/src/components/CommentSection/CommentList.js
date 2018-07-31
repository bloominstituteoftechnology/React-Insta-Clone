import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';

class CommentList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            newCommentHolder: '',
        };
        console.log(props);
        
    }

    componentDidMount(){
        this.setState({
            comments: this.props.comments,
        })
    }

    handleCommentInput = (e) => {
        console.log(e.target.value);
        this.setState({
            newCommentHolder: e.target.value
        });
    }

    addNewComment = (e) => {
        e.preventDefault();
        let newComments = this.state.comments.slice();
        let newComment = {
            username : 'BlahBlahBob',
            text: this.state.newCommentHolder
        };
        newComments.push(newComment);
        this.setState({
            comments: newComments
        })
        
    }

    render(){
        return (
            <div className="comment-list-container">
                {
                    this.state.comments.map((comment) => {
                        return <Comment key={comment.username} comment={comment} />
                    })
                }
                <form onSubmit={this.addNewComment}>  
                    <input placeholder="Add a comment..." onChange={this.handleCommentInput}></input>
                    <button type="submit"></button>
                </form>
            </div>
        )
    }
}

CommentList.propTypes = {
    comment: PropTypes.array, 
}

export default CommentList;
import React from 'react';
import Comment from './Comment';
import InputComment from './InputComment';



class CommentContainer extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            timestamp: props.timestamp,
            inputText: ''
        };
    }

    handleChange = event =>{
        this.setState({
            inputText: event.target.value
        })
    }

    handleAddComment = event => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments, {username: 'SpyGirl', text: this.state.inputText}],
            inputText: ''
        })
    }

    render() {
        let comments = this.state.comments.map((comment, index) => {
            return <Comment key={index} commentData={comment}/>; 
        });

        return (
            <div className="post-container">
                {comments}
                <p className="timestamp">{this.state.timestamp}</p>
                <InputComment inputText={this.state.inputText} handleChange={this.handleChange} handleAddComment={this.handleAddComment}/>
            </div>
        );
    }

}

export default CommentContainer;
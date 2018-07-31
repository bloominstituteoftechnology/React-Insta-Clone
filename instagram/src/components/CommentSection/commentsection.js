import React, { Component } from 'react';
import Comment from './comment';
import './commentsection.css'
import PropTypes from 'prop-types';


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    handleCommentChange = event => {
        this.setState({ text: event.target.value})
      };

    addNewComment = (event) => {
        event.preventDefault();
        const arr = this.state.data.comments.slice();
        arr.push(
            {
            username: this.state.data.username,
            text: this.state.data.text,
            id: Date.now()
            }
        );
        this.setState({comments: arr, text: ''})
    }

    render(){
        return ( 
            <div>      
                {this.state.data.comments.map(item => <Comment username={item.username} text={item.text} key={item.username} likes={item.likes}/>)}
                <div className="timestamp">{this.state.data.timestamp}</div>
                <hr/>
                <form>
                    <input placeholder="Add a comment..." type="text" className="form-control no-border comment-field" onSubmit={this.state.addNewComment} onChange={this.state.handleCommentChange} value={this.state.value}/>
                </form>
                {console.log(this.state.data.comments)}
            </div>
        );
    }
}

CommentSection.propTypes = {
    data: PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object)
    })
};

export default CommentSection;
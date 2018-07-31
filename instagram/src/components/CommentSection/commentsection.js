import React, { Component } from 'react';
import Comment from './comment';
import './commentsection.css'
import PropTypes from 'prop-types';


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            input: ''
        }
    }

    handleCommentChange = event => {
        // console.log('test');
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state.input);
      };

    addNewComment = (event) => {
        event.preventDefault();
        const arr = this.state.data.comments.slice();
        arr.push(
            {
            username: this.state.data.username,
            text: this.state.input,
            id: Date.now()
            }
        );
        console.log(arr);
        this.setState({data: {comments: arr}, input: ''})
        // console.log(this.state.data);
    }

    render(){
        return ( 
            <div>      
                {this.state.data.comments.map(item => <Comment username={item.username} text={item.text} key={item.username} likes={item.likes}/>)}
                <div className="timestamp">{this.state.data.timestamp}</div>
                <hr/>
                <form onSubmit={this.addNewComment}>
                    <input placeholder="Add a comment..." name="input" type="text" className="form-control no-border comment-field" onChange={this.handleCommentChange} value={this.state.input} />
                </form>
                {/* {console.log(this.state.data)} */}
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
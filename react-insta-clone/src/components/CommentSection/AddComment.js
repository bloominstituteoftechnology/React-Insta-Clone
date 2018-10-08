import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            username: 'corey_with_an_e',
        }
        this.handleChange = this.handleChange.bind(this);
        this.comment = this.comment.bind(this);
    }
    handleChange(event) {
        this.setState({input: event.target.value})
        console.log(this.state.input);
    }

    comment = (event) => {
        console.log(this.state.username)
        return(
            <CommentSection 
                text={this.state.input}
                username={this.state.username}/>                
        ) 
    }

    render() {
        return (
            <div className="add-comment">
               <input 
                placeholder="Add a Comment"
                input={this.state.input}
                onChange={this.handleChange}>
               </input>
                <div className="button" onClick={this.comment}>
                    Add Comment
                </div>
            </div>
        )
    }
}

export default AddComment;


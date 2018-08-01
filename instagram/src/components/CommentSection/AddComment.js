import React, { Component } from 'react';

class AddComment extends Component {
    
    render() { 
        return ( 
            <div className="add-comment" onSubmit={this.props.addNewComment}>
                <input 
                    type="text"
                    placeholder="Add new comment"
                    onChange={this.props.handleCommentUpdate}
                    value={this.props.value}
                />
                <button onClick={this.props.addNewComment}>Add new post</button>
            </div>
         );
    }
}
 
export default AddComment;
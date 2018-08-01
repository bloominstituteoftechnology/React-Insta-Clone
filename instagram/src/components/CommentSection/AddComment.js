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
                <i className="fas fa-ellipsis-h" onClick={this.props.addNewComment}></i>
            </div>
         );
    }
}
 
export default AddComment;
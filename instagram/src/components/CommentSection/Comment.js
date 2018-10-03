import React from 'react'

class Comment extends React.Component {

    render() {
        return (
            <p>
             <strong>{this.props.commentUsername}</strong> {this.props.commentText}  
            </p>
        );
    }
}

export default Comment
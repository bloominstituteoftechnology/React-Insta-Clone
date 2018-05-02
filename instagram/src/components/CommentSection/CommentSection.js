import React from 'react';

class CommentSection extends React.Component {
    render(){
        return (
            <div>
                <div>
                    {this.props.comment.username}
                    <span>{this.props.comment.text}</span>
                </div>
                <h3>...</h3>
                
            </div>
        )
    }
}

export default CommentSection;
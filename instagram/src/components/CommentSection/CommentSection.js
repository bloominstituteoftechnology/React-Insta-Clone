import React from 'react';

class CommentSection extends React.Component {
    render(){
        return (
            <div>
                <h3>...</h3>
                <input type="text" name='comment'  />
                <button>Add comment</button>
                <div>
                    {this.props.comment.username}
                    <span>{this.props.comment.text}</span>
                </div>
                
            </div>
        )
    }
}

export default CommentSection;
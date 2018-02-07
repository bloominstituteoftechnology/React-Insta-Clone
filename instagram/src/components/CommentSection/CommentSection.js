import React from 'react';

class CommentSection extends React.Component {
    render() {
      return (
            <div className="sngl-comment">
                <strong>{this.props.comment.username} </strong>{this.props.comment.text} <br/><br/>
            </div>
          )
    }
}

export default CommentSection;
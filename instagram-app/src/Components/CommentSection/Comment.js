import React from 'react';

class Comment extends React.Component {
    render(){
    return(
        <div>
            <h2>{this.props.comment.username}
            {this.props.comment.text}</h2>
        </div>
    );
    };
};

export default Comment;
import React, { Component } from 'react';

class CommentContainer extends Component {
    render() {
        return (
            <div>
                {this.props.dummyData.map(comment => {
                    return (
                        <div key={comment.timestamp}>
                            <h4>{comment.comments}</h4>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CommentContainer;

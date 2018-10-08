import React from 'react';
import CommentFooter from './CommentFooter';

class CommentContainer extends React.Component {
    render() {
        return (
            <div>
               <CommentFooter
                commentHandler={this.props.commentHandler}
               />
            </div>
        );
    }
}

export default CommentContainer;

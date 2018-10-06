import React from 'react'
import './commentSection.css';
class Comment extends React.Component {

    render() {
        return (
            <p className="commentArea">
             <span className='commentUser'>{this.props.commentUsername}</span> {this.props.commentText}  
            </p>
        );
    }
}
Comment.defaultProps = {
    commentUsername: 'no username supplied',
    commentText: 'no text supplied',
}
export default Comment
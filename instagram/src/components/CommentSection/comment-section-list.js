import React from 'react';
import PropTypes from "prop-types";
import Comment from './comment-section.js';

// class CommentSectionList extends React.Component {
//     constructor(props) {
// 	super(props);
//     }
//     render() {
// 	return <div className="comment-section-list">{this.props.comments.map(comment => (<Comment comment={comment} />))}</div>;
//     };
// };

const CommentSectionList = (props) => {
    return <div className="comments">{props.comments.map(comment => <Comment key={comment.text} comment={comment}/>)}</div>;
};

CommentSectionList.propTypes = {
    myComments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSectionList;

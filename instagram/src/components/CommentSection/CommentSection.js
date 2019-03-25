import React from 'react';
// import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            comments: props.comments
        }
    }

    render() {
        return(
            <div>
                <div className = 'action-icons'>
                <i className = "far fa-heart"></i>
                <i className = "far fa-comment"></i>
                <p className = 'likes'>{props.dummy.likes}</p>
                </div>
                <div>
                <div>

                </div>
                </div>
                {this.state.comments && this.state.comments.map(comment => (
                    <Comment 
                        comment = {comment}
                    />
                ))}
                <CommentInput />
            </div>
        )
    }

}


export default CommentSection;
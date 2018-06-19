import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount(){
        this.setState({comments: this.props.commentInfo})
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => 
                    <Comment key={Math.random(Date.now())}
                            comment={comment.text}
                            userIn={comment.username} />
                )}
                <CommentInput />
            </div>
        );
    }

}

CommentSection.propTypes = {
    commentInfo: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
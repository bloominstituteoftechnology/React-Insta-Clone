import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import CommentInput from './CommentInput';
import Comment from './Comment'



class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }
    render() {
        return (
            <Container>
                {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                <CommentInput />

            </Container>
        )
    }

}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
}

export default CommentSection;

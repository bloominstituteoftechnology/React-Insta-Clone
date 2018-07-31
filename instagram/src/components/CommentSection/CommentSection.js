import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col} from 'reactstrap';
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
            <Row>
                <Col>
                    {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                    <CommentInput />
                </Col>
            </Row>

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

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }
    render() {
        return (
           <div>
            {/* {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
            <CommentInput /> */}
           </div> 
           
        )
    }

}

export default CommentSection;

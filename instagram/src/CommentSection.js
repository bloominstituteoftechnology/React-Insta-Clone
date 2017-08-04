import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postcomment: []
        };
    }
    componentDidMount() {
        this.setState({postcomment: this.props.comments});
    }

    render() {
        return (
            <div>
                {this.state.postcomment.map((comment, i) =>
                <Row className="show-grid">
                    <Col md={12}>{
                        <div className="comment-info">
                            <div>
                                <span className="bolder">{comment.username}</span> {comment.text}<br /> 
                            </div>
                        </div>
    
                    }</Col>
                </Row>
                )}
            </div>
        );
    }
}
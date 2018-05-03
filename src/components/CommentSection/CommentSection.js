import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './CommentSection.css';
export default class CommentSection extends Component {

	constructor(props) {
		super(props);

		this.state = {
            comments: [],
            username: "",
			Text: ""
		}
    }

    componentDidMount() {
		this.setState({
			comments: this.props.comments
		});
}

render() {
    return (
        <div class="comment-container">
        {this.state.comments.map((comment, index) => {
            return (
                <ListGroup className="Col" key={index}>
                    <ListGroupItem class="comment-section">
                    <span class="comment-username">{comment.username}</span>
                    <p class="comment-text">{comment.text}</p>
                    </ListGroupItem>
                </ListGroup>
            );
        })}
        </div>        
    )}
}

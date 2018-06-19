import React from 'react';
import {Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    CardHeader,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input } from 'reactstrap';

class CommentSection extends React.Component {
    render(){
        return (
            <div>
                <CardText>
                    <b>{this.props.comment.username}</b> {this.props.comment.text}
                </CardText>
            </div>
        )
    }
}

export default CommentSection;
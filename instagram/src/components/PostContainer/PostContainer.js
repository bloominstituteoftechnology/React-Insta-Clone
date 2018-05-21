import React, { Component } from 'react';
import dataFile from "../../dummy-data.js";
import './PostContainer.css';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, InputGroup, Input, InputGroupText } from "reactstrap";
import CommentSection from "../CommentSection/CommentSection";


class PostContainer extends Component {
    constructor(item) {
        super(item);
        this.state = {
            posts: []
         };
    }

    componentDidMount() {
        this.setState( {posts: dataFile} );
    }

    render() {
        return (
            <div className="Post-container">
              {this.state.posts.map( (item, index) =>
                  <Card key={index} className="Post">
                    <CardBody>
                        <Row>
                            <img className="Post-userimg" src={item.thumbnailUrl} alt='User Thumbnail' />
                            <CardTitle className="Post-username"> {item.username} </CardTitle>
                        </Row>
                    </CardBody>
                    <CardImg src={item.imageUrl} alt ='main image' />
                    <CardBody>
                        <CardTitle className='Post-likes'>{item.likes} likes</CardTitle>
                        <CardBody>
                            {item.comments.map( (item, index)=> <CommentSection key={index} comment={item}/> ) }
                        </CardBody>
                        <CardText className='Post-date'>{item.timestamp}</CardText>
                        <InputGroup>
                            <Input placeholder="Add a comment" />
                            <InputGroupText>...</InputGroupText>
                        </InputGroup>
                    </CardBody>
                </Card> )
              }
            </div>
        )
    }
}

export default PostContainer;
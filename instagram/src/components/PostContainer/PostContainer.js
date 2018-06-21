import React, { Component } from 'react';
import dataFile from "../../dummy-data.js";
import './PostContainer.css';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, InputGroup, Input, InputGroupText } from "reactstrap";
import CommentSection from "../CommentSection/CommentSection";


class PostContainer extends Component {
    constructor(item) {
        super(item);
        this.state = {
            posts: [],
            comments: item.comments,
            newComment: ''
         };
    }

    componentDidMount() {
        this.setState( {posts: dataFile} );
    }

        handleChange(e){
            this.setState({
              newComment: e.target.value
            });
          }
  componenetWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };
  handleCommentSubmit = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: '[Sam Khaled]' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
    setTimeout(() => {
      this.setComments();
    }, 500);
  };
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
                    <CardImg src={item.imageUrl}  style={{width: '600px', height: '600px'}} alt ='main image' />
                    <CardBody>
                        <CardTitle className='Post-likes'>{item.likes} likes</CardTitle>
                        <CardBody>
                            {item.comments.map( (item, index)=> <CommentSection key={index} comment={item}/> ) }
                        </CardBody>
                        <CardText className='Post-date'>{item.timestamp}</CardText>
                        <InputGroup>
                    <input type="text" placeholder="Add a comment ..." value={this.state.newComment}
          onChange={this.handleChange.bind(this)} 
           onSubmit={this.handleCommentSubmit}
           />
        <p><h3>{this.state.newComment}</h3></p>
                        </InputGroup>
                    </CardBody>
                </Card> )
              }
            </div>
        )
    }
}

export default PostContainer; 
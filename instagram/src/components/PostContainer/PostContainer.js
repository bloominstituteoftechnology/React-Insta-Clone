import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import "./PostContainer.css";
import {Button, Grid, Row, Col} from 'react-bootstrap';
class PostContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      post:  this.props.post
    }
  }


  render(){
    console.log(this.state.post);
    return (
    <div className="Post">
      {this.state.post.comments.map( (e,i) => {
        if(i ===0 ){
          return (
          <div key={i} className="OriginalPost"> 
            <Grid>
              <Row className="show-grid">
                <Col xs={2}md={2}lg={2}>
                  <img alt="thumbnail" className="ThumbnailUrl" src={this.state.post.thumbnailUrl} />
                </Col>
                <Col xs={10}md={10}lg={10}>
                  <CommentSection className="OriginalComment" original={true}username={e.username} text={e.text}/>
                </Col>
              </Row>
            </Grid>
            <img alt="thumbnail" className="ImageUrl" src={this.state.post.imageUrl}/>
          </div>
          );
        }
        else{
          return <CommentSection username={e.username} text={e.text} key={i} original={false} />
        }
      })
      }
    </div>
    );
  }
}

export default PostContainer;

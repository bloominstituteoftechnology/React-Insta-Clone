import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import "./PostContainer.css";
var Alert=require('react-bootstrap/lib/Alert');
console.log(Alert);
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
      <img alt="thumbnail" className="ImageUrl" src={this.state.post.imageUrl}/>
      {this.state.post.comments.map( (e,i) => {
        if(i ===0 ){
          return (
          <div className="container">
            <div className="row">
                <img alt="thumbnail" className="col ThumbnailUrl" src={this.state.post.thumbnailUrl} />
                <CommentSection className="col"username={e.username} text={e.text} key={i} />
            </div>
          </div>
          );
        }
        else{
          return <CommentSection username={e.username} text={e.text} key={i} />
        }
      })
      }
    </div>
    );
  }


}

export default PostContainer;

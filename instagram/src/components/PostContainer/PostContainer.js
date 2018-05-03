import React, { Component } from "react";
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import { Card, CardImg, CardBody } from 'reactstrap';


class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.username = this.props.posts.username;
    this.thumbNail = this.props.posts.thumbnailUrl;
    this.imageUrl = this.props.posts.imageUrl;
    this.timeStamp = this.props.posts.timestamp;
    this.comments = this.props.posts.comments;
    this.state = {
      //putting likes in state because if the post is liked, this number needs to increase, liked will be used to toggled color of heart
      likes: this.props.posts.likes,
      liked: false,
      comments: this.props.posts.comments,
      newComment: "",
    };      
  }

  handleNewComment = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (e) => {
    // console.log(e.keyCode)
    if(e.keyCode === 13){
      // console.log('Yes Captain?')
      const comments = this.state.comments.slice();
      const newComment = {
        username: "King_Ding",
        text: this.state.newComment,
      };
      comments.push(newComment);
      this.setState({comments, newComment: ""});
    }
  }

  handleLiked = () => {
    console.log('test')
    let isLiked = this.state.liked;
    console.log(isLiked)
    isLiked = !isLiked;
    console.log(isLiked)
    // this.setState({ liked: isLiked })
    
    console.log(this.state)
    if(isLiked !== true){
      return this.setState({ likes: this.state.likes - 1, liked: isLiked }); 
    }return this.setState({ likes: this.state.likes + 1, liked: isLiked })
    
  }

  // addLiked = () => {
  //   console.log('test test')
  //   const isLiked = this.state.liked;
  //   if(isLiked !== true){
  //     return; 
  //   }this.setState({ likes: this.state.likes + 1 })

  //   console.log(this.state)
  // }

  // I don't think i need to do this?
  // componentDidMount() {
  //   this.setState({ post: this.props })
  // }
  
  render() {
    // console.log("This is the prop: ",this.props.posts.comments);
    // console.log("This is the post in state: ",this.state);

    return(
      <Card className="postContainer">
        <PostBody username={this.username}
          likes={this.state.likes}
          thumbNail={this.thumbNail}
          imageUrl = {this.imageUrl}
          timeStamp = {this.timeStamp}
          comments = {this.state.comments}
          liked = {this.handleLiked}
          isLiked = {this.state.liked === false ? ('r'): ('s')}
          />
        <div>
        <input
          className="form-control"
          name="newComment"
          onChange={this.handleNewComment}
          value={this.state.newComment}
          placeholder="Add a comment..."
          onKeyDown={this.handleSubmit}
        />
        </div>
      </Card>
    )
  };
}



const PostBody = props => {
  return (
    
    <div className="row">
      {/* {console.log(props)} */}
      <div className="icon-container col-1">
        <img className="logo" src={props["thumbNail"]} alt="something meaningful"/>
      </div>
      <div className="col-11 mt-1">
        {props["username"]}
      </div>
      <div className="">
        <CardImg src={props["imageUrl"]} alt="something meaningful"/>
      </div>
      <CardBody>
        
        <div className="row">  
          {/* <div className="col-4"> */}
          
          <i className={`col-1 fa${props.isLiked} fa-heart`} onClick={props.liked}></i> <i className="col-1 far fa-comment"></i>
          {/* </div> */}
          <div className="col-12">
            {props.likes} likes
          </div>
        </div>
        <div className="bodyCard">
          <div>
            {props.comments.map(comment => {
              // console.log(comment)
              return <div key={comment.username + comment.text}><CommentSection comments={comment}/></div>
            })}
          </div>
          <div className="fadedText">
            {props.timeStamp}
          </div>
        </div>
      </CardBody>
    </div>
  ) 
};









export default PostContainer; 
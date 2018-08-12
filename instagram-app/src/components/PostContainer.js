
import React from '../../node_modules/react';
import CommentSection from './CommentSection';
import './css/PostContainer.css';
import PropTypes from '../../node_modules/prop-types';
// import dummyData from '../dummy-data';




class PostContainer extends React.Component {
  constructor(props){
    console.log(props.content.likes);
    super();
    this.state = {
      content: props.content,
      liked: props.content.likes,
      like: false,
      commentField: ""
    };
  }

  
  // componentDidMount(){
  //   this.setState({
  //     comments: dummyData
  //   })
  // }

  // updateCommentField = (event) => {
  //   console.log("click")
  //   this.setState({[event.target.name]:event.target.value})
  // }

  // submitNewComment = (event, timestamp) => {
  //   event.preventDefault();

  //   const newPostList = this.state.comments.map(each => {
  //     if (each.timestamp === timestamp){
  //       each.comments.push({
  //         username: "erica",
  //         text: this.state.commentField
  //       });
  //     }
  //     return each;
  //   });
  //   this.setState({postList: newPostList, commentField: "" });
  // }


    heartClick = event => {
      let upTick = this.state.liked
      if (!this.state.like){
        upTick++;
        this.setState({
          liked: upTick,
          like: true
        })}
        else { upTick--; 
          this.setState({
            liked: upTick,
            like: false
          })}

    }


    addComment = event => {
      
    }


  


  render(){

    return (
      
      <div class="container">
          <div>
            <img alt="user logo" class="avatar" src={this.state.content.thumbnailUrl}></img>
            <p class="username">{this.state.content.username}</p>
          </div>
          <br></br>
          <div>
            <img alt="main post" src={this.state.content.imageUrl}></img>
            <i onClick={this.heartClick} class="far fa-heart"></i>
            <i class="far fa-comment"></i>
          </div>

          <div>
            <p class="likes">{this.state.liked} likes</p>
          </div>

          <div className="comments">
            <CommentSection comments={this.state.content.comments} />
          </div>
          <div class="timestamp" >{this.state.content.timestamp}</div>
          <br></br>
          <br></br>
          
            
            {/*onChange={this.updateCommentField} onSubmit={(event) => this.submitNewComment(event, this.timestamp)}*/}
          
      </div>
    
  );
  }
}


  

PostContainer.propTypes = {
  thumbNailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}


  export default PostContainer;
// will pass to comment section 
import React, {Component} from "react";
import CommentSection from "../CommentSection/commentsection.js";
//import picture from './logo.svg';




class PostContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: props.username,
  //   }
  // }
    render(){
      // all the html that makes up each post.
      //console.log(this.props);
      const { username, thumbnailUrl, imageUrl, likes, timestamp, comments } = this.props.dummyData; 
      return(
        <div> 
          <div className= 'header'> 
            <h2>
              {
                username
              }
            </h2>
          </div>
          <div className = 'image'> 
          {
             <img src = {imageUrl}/>
          }
          </div>
          {
           // comments
          }
          <p className ='comments'>  this is some text</p>
          {
            comments.map(comment => {
              console.log(comment) // this displays the text and comment
              return( <CommentSection comments={comment}/>)
               //return comment;
            })
            // <CommentSection {...this.state}/>
          }
      </div>
      );
    }
}

  
  

export default PostContainer;

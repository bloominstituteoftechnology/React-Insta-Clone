// will pass to comment section 
import React, {Component} from "react";
//import picture from './logo.svg';
// import CommentSection from './components/CommentSection/CommentSection.js';


class PostContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: props.username,
  //   }
  // }
    render(){
      // all the html that makes up each post.
      console.log(this.props);
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
          {/* <CommentSection  username='Test'> test </CommentSection> */}
      </div>
      );
    }
}

  
  

export default PostContainer;

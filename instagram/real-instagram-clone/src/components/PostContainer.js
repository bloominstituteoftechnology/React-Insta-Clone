import React from "react";
import CommentSection from "./CommentSection";

class PostContainer extends React.Component{
    constructor(props){
        super(props)
        this.state ={
         liked:false
        }
    }
  // console.log(props)



  render(){

  return (
    <div className="post-container">
      {this.props.post.map(post => (
        <div className="post" key={post.timestamp}>
          <div className="profileName">
            <div className="userinfo">
              <img className="thumbimg" src={post.thumbnailUrl} alt="a post" />{" "}
              <h3 className="user-name">{post.username}</h3>
            </div>{" "}
          </div>
          <div>
            <img className="postimg" src={post.imageUrl} alt="a post" />
          </div>

          <div className=" interactions">
            <div onClick={() => this.setState({liked: !this.state.liked})}><i class="far fa-heart" /></div>
            <div><i class="far fa-comment" /></div>
          </div>
          <div>
            <div>
              <p className="likes">{this.state.liked === false ? post.likes : post.likes + 1} Likes</p>
            </div>
          </div>
          <CommentSection comment={post.comments}/>
        </div>
      ))}
    </div>
  );
      }
};
export default PostContainer;

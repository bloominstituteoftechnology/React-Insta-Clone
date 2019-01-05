import React from "react";
import CommentSection from "../CommentSection/CommentSection"
import PropTypes  from "prop-types";
import "./PostContainer.css"

class PostContainer extends React.Component{
       constructor(props){
         super(props);
         this.state={
             likes:props.data.likes
         }

         this.likeHandler=this.likeHandler.bind(this);
       }

        likeHandler=(event)=>{
        console.log("Liked");
        const newLikes=this.state.likes+1;
        this.setState({likes:newLikes});
      }
      render() {
          return (
              <div>
                  <section className="first">
                      <img src={this.props.data.thumbnailUrl}/>
                      <p><strong>{this.props.data.username}</strong></p>
                  </section>
                  <img src={this.props.data.imageUrl}/>
                  <p><strong>{this.state.likes} likes</strong></p>
                  <section className="sprites">
                      <img className="sprite" src="../../assets/1__NI11fxAiWzMjRbJeuj5Yw.png"
                           onClick={this.likeHandler}/>
                      <img className="sprite2" src="../../assets/chat-image.png"/>
                  </section>
                  <CommentSection comments={this.props.data.comments}/>

              </div>
          );
      }
}

PostContainer.propTypes={

    data:PropTypes.shape({
    username:PropTypes.string.isRequired,
    likes:PropTypes.number,
    comments:PropTypes.arrayOf(PropTypes.string),



    })
}
export default PostContainer
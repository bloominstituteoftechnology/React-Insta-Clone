import React, { Component } from "react";
import "./Post.css";
import CommentContainer from '../CommentSection';

class PostContainer extends Component {
     constructor(props){
         super(props);
     }
   render() {
     const nickname = this.props.username;
     const avatar = this.props.avatar;
     const image = this.props.image;
     const caption = this.props.caption;





        return <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                   <img src={avatar} alt={nickname} />
                </div>
                <div className="Post-user-nickname">
                  <span>{nickname}</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                 <img alt={image} src={image} />
              </div>
            </div>
            <div className="Post-caption">
              <strong>Chris</strong> !
              <CommentContainer caption="captions" />
            </div>
          </article>;
        }
    }

 export default PostContainer;

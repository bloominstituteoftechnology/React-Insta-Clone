
import React from "react";
import "./PostContainer.css";
import { Heart, Bookmark, Message, Share } from "../../assets/assets";

 
const DummyPost = () =>{

    return (
        <div className="post-container">
          <div className="fill-in-card">
            <div className="card-header">
              <div className="fill-in-thumbnail" />
            </div>
            <div className="post-img-fill-in" />
            <div className="card-comments-fill-in">
              {" "}
              <div className="icon-bar">
                <div className="icons">
                  <Heart />
  
                  <Message />
  
                  <Share />
                </div>
  
                <Bookmark />
              </div>
            </div>
          </div>
        </div>
      );
}

export default DummyPost
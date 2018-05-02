import React from 'react';
import './PostContainer.css';

class PostContainer extends React.Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="post-container">
  
          <div>
            {this.props.insta.map(function(insta, index) {
              return (
                <div key={index} className="post-wrapper">
                <section className="user-thumb">
                  <img src={insta.thumbnailUrl} />
                  <p>{insta.username}</p>
                </section>
                <section className="main-img">
                  <img src={insta.imageUrl} />
                </section>
                <section className="likes">
                  <div>
                    <span>&hearts; </span>
                    <span>&loz;</span>
                  </div>
                  <div>
                    {insta.likes} likes
                  </div>
                </section>
                <div>< CommentSection comments={insta.comments}/>
                </div>
                </div>
                )
            })}
          </div>
  
        </div>
      )
    }
  
  }

  class CommentSection extends React.Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div>
          {this.props.comments.map(function(user, index) {
            return (
              <div>
                <p key={index}><strong>{user.username} </strong>{user.text}</p>
              </div>
              )
          })}
          <input
                  type="text"
                  placeholder="Add Comment"
                  className="Input-Comment"
                />
        </div>
  
      )
    }
  
  }

export default PostContainer;
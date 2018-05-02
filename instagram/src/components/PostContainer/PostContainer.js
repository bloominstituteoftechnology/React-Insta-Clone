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
                  <img src={tweet.thumbnailUrl} />
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
                    {tweet.likes} likes
                  </div>
                </section>
                <CommentSection comments={insta.comments}/>
                </div>
                )
            })}
          </div>
  
        </div>
      )
    }
  
  }
export default PostContainer;
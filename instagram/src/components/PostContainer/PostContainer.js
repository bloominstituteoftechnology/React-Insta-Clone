import React from 'react';
import dummyData from '../../dummy-data.js'
import heart from '../../Img/likes.svg';
import comment from '../../Img/comment-regular.svg';

const PostContainer = (props) => {
  return (
    <React.Fragment>
      {
        dummyData.map((item, array) => {
          return (
            <div className="postContainer" key={item.timestamp}>
              <div className="userName">
                <img src={item.thumbnailUrl} alt="user thumbnail" />
                <h4>{item.username}</h4>
              </div>
              <div className="imageContainer">
                <div className="mainImagePost">
                  <img src={item.imageUrl} alt="User image-post" />
                </div>
                <div className="postStats">
                  <img src={heart} alt="likes" className="heart" />
                  <img src={comment} alt="" className="comment" />
                </div>
                <div className="likes">
                  <h4>{item.likes} likes</h4>

                  {
                    item.comments.map(index => {
                      return (
                        <h4>{index.username}<span className="comment"> {index.text}</span></h4>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export default PostContainer;
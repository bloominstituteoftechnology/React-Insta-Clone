//PostContainer
import React from 'react';

const PostContainer = props => {
    return (
        <div className="data">
          {props.data.map(item => (
            <div>
              <h3>{item.username}</h3>
              <img src={item.thumbnailUrl}/>
              <h4>{item.likes}</h4>
              <h4>{item.timestamp}</h4>
              <p>{item.comments.map(item =>(
                <div>
                  <p>{item.username}</p>
                  <p>{item.text}</p>
                </div>
              ))}</p>
            </div>
          ))}
      </div>
    )
}

export default PostContainer;

import React from 'react';
import PropTypes from 'prop-types';

import './PostContainer.css';

const PostContainer = props => {
  return (
    <div>
      {props.p.map(p => (
        <div key={p.username}>
          <img src={p.imageUrl} />
        </div>
      ))}
      ;
    </div>
  );
};

/* <header>{p.thumbnailUrl} {p.username}</header>
            
              <div>
                <div>
                <img src={heart} className="heart" alt="heart" />
                </div>
                {p.likes} {p.comments} {p.timestamp}
              </div>
              </div>
             
              <div />
  )
} */

export default PostContainer;

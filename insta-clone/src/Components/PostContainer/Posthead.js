import React from 'react';


const Posthead= props => {
  return (
    <div className="post-header">
      <div>
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default Posthead;
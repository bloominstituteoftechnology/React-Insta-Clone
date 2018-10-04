import React from 'react';
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <>
      {props.dummyData.map(data => (
        <>
          <div key={data.username}>
            <strong>{data.username}</strong>
          </div>

        </>
      ))}
    </>
  );
};



export default PostContainer;

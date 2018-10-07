import React from 'react';

const CommentSection = props => {
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



export default CommentSection;

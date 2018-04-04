import React from 'react';

const styles = {
  fontWeight: 'bold'
}

const commentsStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '20px'
}

const CommentSection = props => {
  return (
    <div style={commentsStyles}>
      {props.comments.map((c, i) => (
        <div key={c + i}><span style={styles}>{c.username}</span>: {c.text}</div>
      ))}
      <input
        type='text'
        placeholder='Add a comment...'
        onChange={props.change}
        value={props.value}
      />
      <button onClick={props.submit}>Add Comment</button>
    </div>
  );
}

export default CommentSection;

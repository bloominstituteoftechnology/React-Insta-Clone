import React from 'react';
import { Button } from 'reactstrap';

const styles = {
  fontWeight: 'bold',
  // width: '100%'
}

const commentsStyles = {
  display: 'inline-flex',
  flexDirection: 'column',
  
  justifyContent: 'center',
  // marginTop: 60,
  // marginRight: '20%',
  height: 400,
  width: '100%',
  marginRight: 80,
  // border: '2px solid red',
  marginLeft: 20,

}
const moreStyles = {
  marginTop: 10,
  marginBottom: 10,
  display: 'inline-flex',
  justifyContent: 'start',
  // border: '2px solid blue',
  width: '100%,',

}
const buttonStyle = {
  display: 'flex',
  marginTop: 10,
  justifyContent: 'center',
  marginLeft: '35%',
  width: '30%'
  // justifyContent: 'end'
}

const CommentSection = props => {
  return (
    <div style={commentsStyles}>
    {/* {console.log(props.comments)} */}
      {props.comments.map((c, i) => (
        <div key={c + i} style={moreStyles} ><span style={styles}>{c.username}</span>: {c.text}</div>
      ))}
      <input
        type='text'
        placeholder='Add a comment...'
        onChange={props.change}
        value={props.value}
      />
      <Button color="primary" style={buttonStyle} onClick={props.submit}>Add Comment</Button>{' '}
      {/* <button onClick={props.submit}>Add Comment</button> */}
    </div>
  );
}

export default CommentSection;

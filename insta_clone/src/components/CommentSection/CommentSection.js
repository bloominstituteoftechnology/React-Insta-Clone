import React from 'react';
import Comment from '../Comment/Comment';

function CommentSection({ comments }) {
  return (
    <div>
      <div style={comment1}>
        <div style={ico}>
          <i style={space} class="far fa-heart" />

          <i style={space} class="far fa-comment" />
        </div>

        {comments.map((c, index) => (
          <Comment text={c.text} username={c.username} key={index} />
        ))}
      </div>
      <div>
        <input style={addComment} placeholder="Add a comment" type="text" />
        <i style={float} class="fas fa-ellipsis-h" />
      </div>
    </div>
  );
}

const float = {
  float: 'right',
  margin: '25px 0',
  marginRight: '10px'
};

const space = {
  paddingRight: '10px'
};
const ico = {
  fontSize: '25px'
};

const addComment = {
  borderStyle: 'none',
  padding: '20px',
  fontSize: '20px'
};

const comment1 = {
  borderBottom: '1px solid lightGray',

  margin: '0px 10px',
  marginTop: '10px'
};

export default CommentSection;

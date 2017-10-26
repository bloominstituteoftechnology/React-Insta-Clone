import React from 'react';
import './App.css';
import { Form, FormGroup, FormControl, Image } from 'react-bootstrap';

const PostList = (props) => {
  return (
    <div className="UserPosts">
      {props.postData.map((poster) => {
        return(
          <div className="Commenter" key={poster.username}>
            <h3><Image className="thumbnail" src={poster.thumbnailUrl} /> { poster.username }</h3>
            <Image className="post" src = {poster.imageUrl} />
            <div className="Comments">
              <p className="post PostList">{poster.likes} likes</p>
              {poster.comments.map((comment) => {
                return(
                  <div key={comment.username}>
                    <p className="User PostList"> {comment.username}</p>
                    <p className="Comment">{comment.text}</p>
                  </div>
                )
              })}
              <Form>
                <FormGroup>
                  <FormControl className="CommentAdd" type="text" placeholder="Add a comment..." />
                </FormGroup>
              </Form>
            </div>
          </div>
        );

      })}
    </div>
  );
};

export default PostList;

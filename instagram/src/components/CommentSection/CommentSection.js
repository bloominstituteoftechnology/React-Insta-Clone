import React from 'react';
import Proptypes from 'prop-types';
import Comment from './Comment';

import heart from '../../img/insta-heart.png';
import reply from '../../img/insta-reply.PNG';
import comment from '../../img/insta-comment.PNG';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
      likes: props.likes,
      comments: props.comments
    }
  }

  render() {

    const comments = this.state.comments.map(comment => <Comment key={Math.random()}
                                                                 user={comment.username}
                                                                 text={comment.text} />)

    return(
      <div className="post__comments">

        <div  className="post__comments__interaction">
          <img src={heart} alt="insta-heart" />
          <img src={reply} alt="insta-reply" />
          <p>{this.state.likes} likes</p>
        </div>

        {comments}

        <p className="post__comments__time">{this.state.time}</p>

        <div className="post__comments__add">
          <input type="text" placeholder="Add Comment.." />
          <img src={comment} alt="insta-comment" />
        </div>
      </div>
    );
  }
}

export default CommentSection;

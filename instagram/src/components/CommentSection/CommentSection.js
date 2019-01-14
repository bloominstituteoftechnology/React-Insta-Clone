import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props =>{
    console.log(props);
    return (
      <div >
          <div>
              <i className="far fa-heart"/>
              <i className="far fa-comment"/>
          </div>
          <p>{props.likes} likes</p>
          {props.comments.map((comment, i)=>{
              return <p key={i}>{comment.username} {comment.text}</p>
          })}
          <p className="time-stamp">{props.timeStamp}</p>
          <input placeholder="Add a comment..."/>
        

      </div>
    )
}


CommentSection.propTypes={
    comments: PropTypes.arrayOf(PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
    })),
    timeStamp: PropTypes.string,
    likes: PropTypes.number,
}


export default CommentSection;

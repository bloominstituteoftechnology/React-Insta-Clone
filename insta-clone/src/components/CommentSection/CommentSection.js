import React from 'react'
import Comment from './Comment'
import './CommentSection.css'
import PropTypes from 'prop-types'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import * as moment from "moment";
let now = moment().fromNow();

library.add(faComment, faHeart, faSearch, faEllipsisH);

const CommentSection = props => {

  return <div className="comment-section">
    <img className='post-img' src={props.image} alt=" " />
    <div className="icons-likes">
      <FontAwesomeIcon icon={["far", "heart"]} /> {" "}
      <FontAwesomeIcon icon={["far", "comment"]} />
    </div>
    <div className="section likes">
      {props.likes} likes
        </div>

    {props.comments.map((comment, index) => {
      return <Comment user={comment.username} comments={comment.text} key={index} />;
    })}

    <p className='time-moment'>{now}</p>
    <form className="form-comment">
      <FontAwesomeIcon className='more-icon' icon={["fas", "ellipsis-h"]} />
      <textarea className='add-comment' type="text" placeholder="Add comment..." />
    </form>
  </div>

}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
    key: PropTypes.number

  })).isRequired
}

export default CommentSection
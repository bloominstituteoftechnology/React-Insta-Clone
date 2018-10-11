import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes
    };
  }

  render() {
    return (
      <div>
        <div className="post__icons">
          {/* SVG heart icon */}
          <svg className="post__icons--icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>

          {/* SVG comment icon */}
          <svg className="post__icons--icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path  d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.144 7.961-9.91 7.961-1.937 0-3.384-.397-4.394-.644-1 .613-1.594 1.037-4.272 1.82.535-1.373.722-2.748.601-4.265-.837-1-2.025-2.4-2.025-4.872 0-4.415 4.486-8.007 10-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.417.345 2.774.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z"/></svg>
        </div>

        
        <div className="post__likes">
          <h4>{this.state.likes} likes</h4>
        </div>

        <div className='post__comments'>
          {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
        </div>
      </div>
    ) 
  }
}

CommentContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentContainer;

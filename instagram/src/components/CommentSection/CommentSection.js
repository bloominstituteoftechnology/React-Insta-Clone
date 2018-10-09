import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';


// class CommentSection extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = props;
//   }


//   render() {
//     return (
//       <div className='comment-section'>
//         {this.state.comments.map((comment, idx) => (
//           <div className='comment' key={idx}>
//             <p className='comment-username'>{comment.username}:</p>
//             <p className='comment-text'>{comment.text}</p>
//           </div>
//         ))}
//       </div>
//     )
//   };
// };

const CommentSection = props => {
  return (
    <div className='comment-section'>
      {props.comments.map((comment, idx) => (
        <div className='comment' key={idx}>
          <p className='comment-username'>{comment.username}:</p>
          <p className='comment-text'>{comment.text}</p>
        </div>
      ))}
    </div>
  )
};



CommentSection.propTypes = {
  comments: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;
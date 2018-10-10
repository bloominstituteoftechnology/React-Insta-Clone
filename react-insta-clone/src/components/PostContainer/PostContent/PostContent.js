import React from 'react';
import PostIcons from './PostIcons/PostIcons';
import CommentSection from './CommentSection/CommentSection';
import propTypes from 'prop-types';

class PostContent extends React.Component {

  render() {
    return (
      <section className='post-content'>
        <PostIcons likes={this.props.likes}/>
      <CommentSection comments={this.props.comments} onSubmit={this.props.onSubmit} commentText={this.props.commentText} onChange={this.props.onChange} close={this.props.close}/>
      </section>
    );
  }
}

PostContent.propTypes = {
  likes: propTypes.number,
  comments: propTypes.array
}

export default PostContent;

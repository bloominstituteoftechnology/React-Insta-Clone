import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import './post.css';

class PostContainer extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        {this.props.data.map(x => {
          return (
            <>
              <PostHeader name={x.username} headerImage={x.thumbnailUrl} />
              <PostImage image={x.imageUrl} />
            </>
          );
        })}
      </div>
    );
  }
}

export default PostContainer;

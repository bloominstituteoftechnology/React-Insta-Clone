import React from 'react';
import Header from '../Header/Header'
import PostContainer from '../PostContainer/PostContainer'
import PropTypes from 'prop-types';

const PostsPage = ({data, commentInput, searchInput}) => (
    <div className="posts-page">
        <Header 
          searchInput={searchInput}
        />
        {data.map((data, index) => {
          return (
            <PostContainer 
              data={data} 
              index={index}
              commentInput={commentInput}
              searchInput={searchInput}
            />
          )
        })}
    </div>
)

PostsPage.proptypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  commentInput: PropTypes.string,
  searchInput: PropTypes.string
}

export default PostsPage;
import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from './PostContainer';

const PostsPage = props => (
    <section>
        {props.data.map((postData, index) => (
          <PostContainer
            key={postData.imageUrl} 
            data={postData}
            index={index}
            onNewComment={props.onNewComment}
            onDeleteComment={props.onDeleteComment}
          />
          )
        )}
    </section>
);

PostsPage.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })),
    }), 
    onNewComment: PropTypes.func,
    onDeleteComment: PropTypes.func,
};

export default PostsPage;
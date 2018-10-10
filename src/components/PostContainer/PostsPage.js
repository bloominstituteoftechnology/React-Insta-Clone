import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import './post.css';

const PostsPage = (props) => {
    return (
        <div className="app-container">
            <SearchBar search={props.search} />
            {props.posts.map(post => (
            <div key={post.timestamp}>
                <PostContainer  username={post.username}
                                thumbnail={post.thumbnailUrl}
                                image={post.imageUrl}
                                likes={post.likes}
                                timestamp={post.timestamp}
                                comments={post.comments} />
          </div>
        ))}
      </div>
    )
};

export default PostsPage;
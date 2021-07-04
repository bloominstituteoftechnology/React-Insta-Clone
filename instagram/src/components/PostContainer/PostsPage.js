import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = (propsFromApp) => (
    <section className="posts-page">
        <SearchBar 
        updateSearch={propsFromApp.updateSearch} 
        focusSearch={propsFromApp.focusSearch} 
        logout={propsFromApp.logout}
        />
        <PostContainer 
        postData={propsFromApp.postData} 
        currentSearch={propsFromApp.currentSearch}
        />
    </section>
)

export default PostsPage;
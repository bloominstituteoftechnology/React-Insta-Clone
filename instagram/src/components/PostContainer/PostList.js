import React from 'react';
import shortid from 'shortid';
import PostContainer from './PostContainer';
import './PostList.sass';
import SideBar from './SideBar';

const PostList = props => {
    return (
        <main className="stream">
            <div className="post-list">
                {props.posts.map(post => (
                    <PostContainer post={post} key={shortid.generate()} />
                ))}
            </div>
            <SideBar />
        </main>
    );
};

export default PostList;

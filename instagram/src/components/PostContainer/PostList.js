import React from 'react';
import shortid from 'shortid';
import PostContainer from './PostContainer';
import SideBar from './SideBar';
import styled from 'styled-components';

const Main = styled.main`
    padding-top: 135px;
    display: flex;
    flex-flow: row nowrap;
    max-width: 935px;
    align-items: stretch;
    margin: 0 auto;
    .post-list {
        max-width: 614px;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        width: 100%;
        align-items: stretch;
        float: left;
        margin-right: 28px;
        width: 100%;
    }
`;

const PostList = (props) => {
    return (
        <Main className="stream">
            <div className="post-list">
                {props.posts.map((post) => <PostContainer post={post} key={shortid.generate()} />)}
            </div>
            <SideBar />
        </Main>
    );
};

export default PostList;

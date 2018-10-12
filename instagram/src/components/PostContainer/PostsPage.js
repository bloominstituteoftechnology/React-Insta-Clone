import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import styled from 'styled-components';

const AppWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

const PostsPage = (props) => {
    return (
        <AppWrapper>
            <SearchBar changeHandler={props.changeHandler} filterTarget={props.filterTarget} />
            <PostContainer data={props.data} likes={props.likes} increment={props.increment} />
        </AppWrapper>
    );
};

export default PostsPage;

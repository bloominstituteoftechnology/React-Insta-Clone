import React from 'react';
import PostContainer from './PostContainer';
import './postcontainer.css';
import styled from 'styled-components';

let AllPosts = styled.div`
    margin: 0 auto;
    max-width: 600px;
    margin-bottom: 50px;
    padding-top: 60px;
`;

let Posts = (props) => {
    if (props.searchString === '') {
        return (
            <AllPosts>
                {props.postData.map((post, i) => <PostContainer key={i} post={post} username={props.username}/>)}
            </AllPosts>
        )
    }

    else {
        let searchArr = props.postData.filter(post => post.username.includes(props.searchString));
        return (
            <AllPosts>
                {searchArr.map((post) => <PostContainer post={post} username={props.username}/>)}
            </AllPosts>
        )
    }
}

export default Posts;

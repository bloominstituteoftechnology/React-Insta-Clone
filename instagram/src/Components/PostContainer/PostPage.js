import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import './Post.css';
import styled from 'styled-components';

const header = styled.header `

`;
class PostPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: dummyData
        }
    }

    render() {
        return (
            <div className="post-container">
            <header>
            <SearchBar />
            </header>
                
                <PostContainer posts = {this.state.posts} />
            </div>
        );
    }
}

export default PostPage;
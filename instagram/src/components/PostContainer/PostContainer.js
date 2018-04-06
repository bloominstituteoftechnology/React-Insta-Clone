import React, { Component } from 'react';
import Post from './Post';
import dummyData from '../../dummy-data';

class PostContainer extends Component {
    state = {
        postData: []
    };

    componentDidMount() {
        this.setState({ postData: dummyData });
    }

    render() {
        const { postData } = this.state;
        return <div>{postData.map(post => <Post post={post} />)}</div>;
    }
}

export default PostContainer;
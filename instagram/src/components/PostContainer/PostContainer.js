import React, { Component } from 'react';
import Post from './Post';

import dummyData from '../../dummy-data';

class PostContainer extends Component {
    constructor () {
        super()
    }
    render() {
        return (
        <div>
            {dummyData.map((post, i) =>
                <Post 
                    key={i} 
                    username={post.username}
                    thumnnailUrl={post.thumnnailUrl}
                    imageUrl={post.imageUrl}
                    likes={post.likes}
                    timestamp={post.timestamp}
                    comments={post.comments}
                />
            )}
        </div>
        );
    }
}

export default PostContainer;

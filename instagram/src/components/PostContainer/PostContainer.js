import React from 'react';
import Post from './Post.js';
import { PostContain } from '../../Styles';

const PostContainer = props => {
    return (
        <PostContain>
            {props.data.map((item, index) => {
                return (
                  <Post post={item} key={item.timestamp}/>
                );
            })}
        </PostContain>
    );
}

export default PostContainer;
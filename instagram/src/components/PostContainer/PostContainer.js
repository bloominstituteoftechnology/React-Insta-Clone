import React from 'react';
import Post from './Post';
import { PostContainers } from '../ReusableComponents/PostContainer';

const PostContainer = props => {
    let data = props.data;
    let search = props.searchString.trim().toLowerCase();

    if (search.length > 0) {
        data = data.filter(user => user.username.toLowerCase().match(search));
    }

    return (
        <PostContainers>
            {data.map((data, index) => {
                return <Post key={data.username + index} id={index} data={data} />
            })}
        </PostContainers>);
}

export default PostContainer;
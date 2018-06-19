import React from 'react';
import Post from './Post';

const PostContainer = props => {
    let data = props.data;
    let search = props.searchString.trim().toLowerCase();

    if (search.length > 0) {
        data = data.filter(user => user.username.toLowerCase().match(search));
    }

    return (
        <div className='post-containers'>
            {data.map((data, index) => {
                return <Post key={data.username + index} value={props.value} onChange={props.onChange}
                    onSubmit={props.onSubmit} deleteComment={props.deleteComment}
                    likeComment={props.likeComment} addComment={props.addComment} data={data} />
            })}
        </div>);
}

export default PostContainer;
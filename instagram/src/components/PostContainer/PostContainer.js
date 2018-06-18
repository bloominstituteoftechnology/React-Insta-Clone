import React from 'react';

const PostContainer = props => {
return <div>{props.datas.map(data => <div>{data.username}</div>)}</div>
};

export default PostContainer;
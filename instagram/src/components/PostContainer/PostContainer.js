import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
return <div>{props.datas.map(data => <div>{data.username} <CommentSection comments={data.comments}/></div>)}</div>
};

export default PostContainer;
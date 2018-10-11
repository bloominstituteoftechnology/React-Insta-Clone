import React from 'react';
import PostContainer from './PostContainer';
import './postcontainer.css';

let Posts = (props) => {
    if (props.searchString === '') {
        return (
            <div className="posts">
                {props.postData.map((post, i) => <PostContainer key={i} post={post} username={props.username}/>)}
            </div>
        )
    }
    else {
        let searchArr = props.postData.filter(post => post.username.includes(props.searchString));
        return (
            <div className="posts">
                {searchArr.map((post) => <PostContainer post={post} username={props.username}/>)}
            </div>
        )

    }
}

export default Posts;
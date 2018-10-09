import React from 'react';
import PostContainer from './PostContainer';
import './postcontainer.css';

let Posts = (props) => {
    if (props.searchString === '') {
        console.log(props.searchString);
        console.log(props.postData);
        return (
            <div className="posts">
                {props.postData.map((post, i) => <PostContainer key={i} post={post}/>)}
            </div>
        )
    }
    else {
        let searchArr = props.postData.filter(post => post.username.includes(props.searchString));
        console.log(searchArr);
        return (
            <div className="posts">
                {searchArr.map((post) => <PostContainer post={post}/>)}
            </div>
        )

    }
}

export default Posts;
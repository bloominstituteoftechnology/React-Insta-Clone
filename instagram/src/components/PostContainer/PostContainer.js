import React from 'react';
import './PostContainer.css';
import Posts from './Posts'


const PostContainer = data => {

    return (
        <div className={"postContainer"}>
            <Posts data={data.data}/>
        </div>
    );
}
export default PostContainer;
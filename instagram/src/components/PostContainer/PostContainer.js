import React from 'react';
import './PostContainer.css';
import Posts from './Posts'


const PostContainer = props => {

    return (
        <div className={"postContainer"}>
            <Posts dummyData={props.dummyData}/>
        </div>
    );
}
export default PostContainer;
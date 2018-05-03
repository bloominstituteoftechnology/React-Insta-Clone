import React from 'react';
import './PostContainer.css';

const PostContainer = props => {
    return (
        props.data.map((obj) => {
            return (
                <div key={obj.username + obj.thumbnailUrl + obj.imageUrl + obj.likes +obj.timestamp}>
                {/* anytime we have an array of elements, REACT NEEDS A KEY! for each elem*/}
                {obj.username} {obj.thumbnailUrl} {obj.imageUrl} {obj.likes} {obj.timestamp}
                </div>
            );
        })
    );        
}
export default PostContainer;
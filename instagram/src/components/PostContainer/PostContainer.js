import React from 'react';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div>
            {props.dataProp.map((data, index) => 
            <div key={'post ' + index}>
                <div>
                <img src={data.thumbnailUrl} alt={data.username + ' profile image'}/>
                <span>{data.username}</span>
                </div>
            </div>)}
        </div>
    );
}

export default PostContainer;

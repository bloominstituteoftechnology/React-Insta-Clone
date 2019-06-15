import React from 'react';

const Post = (props) => {
    console.log(props);
    return (
        props.data.map(data => (
            <div key={data.id} className="data">
                <div>
                    <h2>{data.username}</h2>
                    <img src={data.thumbnailUrl} alt="Profile Username"/>
                    <img src={data.imageUrl} alt="Post from User" />
                    <p>{data.likes} likes</p>
                </div>
                
            </div>
        ))
    )
}

export default Post;
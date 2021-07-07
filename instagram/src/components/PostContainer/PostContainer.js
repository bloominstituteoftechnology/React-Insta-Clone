import React from 'react';
import Post from './Post';


const PostContainer = props => {
    return (
        <div className="container">
            {props.dumData.map(usersdata => (
              <Post key={usersdata.imageUrl} usersdata={usersdata} />  
            ))}
        </div>
    );
};

export default PostContainer;
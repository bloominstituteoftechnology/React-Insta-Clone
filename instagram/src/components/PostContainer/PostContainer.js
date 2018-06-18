import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return (
        <div>
            {props.dumData.map(usersdata => (
              <CommentSection key={Math.random(Date.now())} usersdata={usersdata} />  
            ))}
        </div>
    );
};

export default PostContainer;
import React from 'react';
import Post from './Post';
import './PostContainer.css';

const PostContainer = (props) => {
    console.log(typeof (props.Postdata))
   let  data= Array.from(props.Postdata)
    return (
        <div>
            
            {data.map((post, index) => (
                
                <Post
                key={index}
                post={post}
                />
            ))}
        </div>
    );
}

// PostContainer.propTypes = {
//     data: PropTypes.array.isRequired
// };

export default PostContainer;
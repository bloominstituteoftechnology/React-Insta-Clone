import React from 'react';
import Post from './Post'
import PropTypes from 'prop-types';


function PostContainer(props){
    return(
        props.post.map((e,index) => (
            <div key={index}> 
            <Post 
                username={e.username} 
                thumbnail={e.thumbnailUrl}
                image={e.imageUrl}
                comments={e.comments}
                likes={e.likes}
                timestamp={e.timestamp}
                index={index}
            />
        </div>
        ))
    );
}

PostContainer.propTypes = {
    username:PropTypes.string,
    thumbnail:PropTypes.string,
    image:PropTypes.string,
    comments:PropTypes.array,
    likes:PropTypes.number,
    timestamp:PropTypes.string,
    index:PropTypes.number
}


export default PostContainer;
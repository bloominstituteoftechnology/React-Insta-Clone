import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import "./PostContainer.css"


function PostContainer(props){
    return(
        <div className="post-container">
        {
            props.post.map( e => (
                // console.log(e.display)
                <div className="post" key={e.index} style={{display:`${e.display}`}}> 
                <Post 
                    username={e.username} 
                    thumbnail={e.thumbnailUrl}
                    image={e.imageUrl}
                    comments={e.comments}
                    likes={e.likes}
                    timestamp={e.timestamp}
                    index={e.index}
                    like={props.like}
                    display={props.display}
                />
                </div>
            ))
        }
        </div>
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
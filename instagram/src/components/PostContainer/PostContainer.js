import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    console.log(props);
    return ( 
        <div>
    {props.posts.map(dummy_data=><Post data={dummy_data}/>)}
    </div>
     );
}
 

// PostContainer.propTypes=
// {dog:PropTypes.arrayOf(PropTypes.object)}
export default PostContainer;
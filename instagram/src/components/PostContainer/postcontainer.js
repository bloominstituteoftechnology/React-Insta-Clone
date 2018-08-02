import React from 'react';
import CommentSection from '../CommentSection/commentsection'
import './postcontainer.css'
import PropTypes from 'prop-types';
import Post from './post'
import styled from 'styled-components';

const PostContainerAttrib = styled.div`
    border: 1px solid lightgray;
    margin: 30px auto;
    box-shadow: 0 0 15px gray;
`

const PostContainer = (props) => {
    return ( 
        <PostContainerAttrib className="row">
            <Post data={props.data}/>
            <CommentSection data={props.data} />
        </PostContainerAttrib>
     );
}

PostContainer.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number       
    })
};
 
export default PostContainer;
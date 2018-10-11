import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import './postcontainer.css'
import PropTypes from 'prop-types';
import Post from './post'
import '../PostContainer/postcontainer.css';
import styled from 'styled-components';

const PostContainerAttrib = styled.div`
    border: 1px solid lightgray;
    margin: 30px auto;
    box-shadow: 0 0 15px black;
    text-align: left;
    width: 50%;
    background: white;
    border-radius: 5px;
`

const PostBody = styled.div`
    width: 85%;
    margin: 0 auto;
`

const PostContainer = (props) => {
    return ( 
        <PostBody>
        <PostContainerAttrib className="row">
            <Post data={props.data}/>
            <CommentSection data={props.data} />
            </PostContainerAttrib>
        </PostBody>
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

//PostContainer.js
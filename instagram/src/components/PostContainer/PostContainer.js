import React from 'react';
import Post from './Post.js';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';
import styled from 'styled-components';

const Card=styled.div`
    max-width: 604px;
    width: 100%;
    height: auto;
`
const PostContainer=prop=>{
    return (
        <Card className="card">
            <Post data={prop.data} liked={prop.liked}/>
            <CommentSection index={prop.index} comments={prop.data.comments} timestamp={prop.data.timestamp}/> 
        </Card>
    )
}
PostContainer.propTypes={
    data: PropTypes.object.isRequired
  }
export default PostContainer;
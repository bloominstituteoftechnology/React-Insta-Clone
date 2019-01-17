import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import '../../App.css'
import PropTypes from 'prop-types';
import Post from './Post'
import {StyledPostContainer} from '../Styles/Reusables'



const PostContainer = props =>{
    return ( 
        <StyledPostContainer className="card">
            <Post username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} imageUrl={props.post.imageUrl}/>
            {console.log(props.post)}
            <CommentSection 
            handleChanges={props.post.handleChanges}
            timeStamp={props.post.timestamp}
            likes={props.post.likes}
            comments={props.post.comments}
            username={props.username}
            /> 
      </StyledPostContainer>
    );
}

PostContainer.propTypes={
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
    })),
    timeStamp: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number,
}


export default PostContainer;

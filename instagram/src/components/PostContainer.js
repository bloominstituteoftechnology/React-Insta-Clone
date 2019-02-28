import React from 'react';
import CommentSection from './CommentSection'
import InstaPost from './InstaPost'
import SearchBar from './SearchBar'
import PropTypes from 'prop-types';


const PostContainer = (props) => {
    
    return (
        <div className='postfeed' key={Date.now()}>
        
            {props.postData.map((item) => {
                return (<div className='postt'>
                    <InstaPost instaPost={item}/> 
                    <CommentSection  commentList={item.comments} obj={item}/>
                </div>)
            })}

        </div>

        
    )
}

PostContainer.propTypes = {
    postData: PropTypes.array.isRequired,
    dummyData: PropTypes.array.isRequired,
    
};

export default PostContainer


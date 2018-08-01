import React from 'react';
import PostContainer from './PostContainer.js';
import PropTypes from 'prop-types';

const PostsPage=props=>{
    return (
        <div className='posts'>
        {props.searchBarValue==='' ?
        props.posts.map((e)=><PostContainer data={e} key={e.imageUrl} liked={props.liked}/>) :
        props.filteredPosts.map((e)=><PostContainer data={e} key={e.imageUrl}/>)}
        </div>
    )
}
PostsPage.propTypes={
    searchBarValue: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    filteredPosts:PropTypes.array.isRequired,
    liked: PropTypes.func.isRequired
}
export default PostsPage;
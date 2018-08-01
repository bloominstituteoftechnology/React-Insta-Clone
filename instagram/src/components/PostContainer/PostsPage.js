import React from 'react';
import PostContainer from './PostContainer.js';

const PostsPage=props=>{
    return (
        <div className='posts'>
        {props.searchBarValue==='' ?
        props.posts.map((e)=><PostContainer data={e} key={e.imageUrl} liked={props.liked}/>) :
        props.filteredPosts.map((e)=><PostContainer data={e} key={e.imageUrl}/>)}
        </div>
    )
}
export default PostsPage;
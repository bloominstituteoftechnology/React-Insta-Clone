import React from 'react'
import moduleName from './PostContainer.css'
import PostContainer from ''

const PostsPage = props =>{
    return(
<div className="post-container">
          {{props.searchInput}.length?{props.searchReturn}.map(item =>{
            return(
            <PostContainer key={item.timestamp} obj={item} />
            )}):{props.posts.map(item =>{
            return(
            <PostContainer key={item.timestamp} obj={item} />
            )})}
        </div>
    )
}
export default PostsPage;
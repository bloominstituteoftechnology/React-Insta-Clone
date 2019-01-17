import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'
import '../../App.css'

const PostsPage = props => {
  return (
    <div className="app-container">
        <SearchBar onChange={props.searchPosts} value={props.searchValue}/>
        <div className="main-content-container">
            {props.displayedPosts.map(post => {
            return <PostContainer post={post} userProfile={props.userProfile}/>
        })}        
    </div>
  </div>
  )
}

PostsPage.propTypes = {

}

export default PostsPage

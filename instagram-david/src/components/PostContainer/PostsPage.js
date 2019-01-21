import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'
import '../../App.css'

const MainContentContainer = styled.div`
    padding-top: 60px;
    background-color: #F9F9F9;
`
const PostsPage = props => {
  return (
    <div className="app-container">
        <SearchBar onChange={props.searchPosts} value={props.searchValue} logout={props.logout}/>
        <MainContentContainer>
            {props.displayedPosts.map(post => {
            return <PostContainer post={post} userProfile={props.userProfile}/>
        })}        
        </MainContentContainer>
  </div>
  )
}

PostsPage.propTypes = {
  searchPosts: PropTypes.func,
  searchValue: PropTypes.string,
  logout: PropTypes.func,
  userProfile: PropTypes.string
}

export default PostsPage

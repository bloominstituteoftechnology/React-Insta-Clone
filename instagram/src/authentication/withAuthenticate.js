import React from 'react'

const withAuthenticate = Login => PostPage =>{
	return props => {
		if(!props.isLoggedIn){
			return <Login
						onLogin={props.onLogin}
						loginError={props.loginError} />
		}
		return <PostPage onQueryChange={props.onQueryChange}
						 onSearchPost={props.onSearchPost}
						 postList={props.postList}
						 onAddComment={props.onAddComment}
						 onLikeClick={props.onLikeClick}
						 onDeleteComment={props.onDeleteComment}
						 onLogout={props.onLogout}
						 likedPosts={props.likedPosts}
						 />
	}
}

export default withAuthenticate

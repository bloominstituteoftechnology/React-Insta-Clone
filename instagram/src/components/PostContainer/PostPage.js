import React from 'react'
import PostContainer from "./PostContainer";
import SearchBar from '../SearchBar/SearchBar'
import {postList} from "../../dummyData";

class PostPage extends React.Component {
	constructor(){
		super()
		this.state = {
			postList:[],
			filteredQuery:'',
			likedPosts:{},
			isLoggedIn:false,
			logginError:{}
		}
		this.useCache = false;
		this.clearCacheFlag = false;
	}
	
	componentDidMount() {
		if(this.clearCacheFlag){
			this.clearCache();
		}
		let cachedList = this.getFromLocal('postList')
		if(cachedList === null){
			this.saveToLocal('postList', postList)
		}
		if(this.useCache){
			this.setState({postList: cachedList})
		}else{
			this.setState({postList: postList})
		}
		
		postList.map(el => this.state.likedPosts[el.id] = false)
	}
	
	
	onSearchPost = (e, val)=>{
		e.preventDefault();
		this.setState({filteredQuery: val})
	}
	
	onQueryChange = (val )=>{
		this.setState({filteredQuery: val})
	}
	
	addLike = (e, postId)=> {
		const copyArr = [...this.state.postList]
		const post =  copyArr.find(el => el.id === postId)
		this.state.likedPosts[postId] = !this.state.likedPosts[postId]
		if(this.state.likedPosts[postId]){
			post.likes++
		} else{
			post.likes--
		}
		
		this.setState({
			postList: copyArr
		})
		this.saveToLocal('postList', copyArr)
	}
	
	addComment = (e, val, postId)=> {
		e.preventDefault();
		const copyArr = this.state.postList.slice()
		const post = copyArr.find(el => el.id === postId)
		const nextIndex = post.comments.length*=10
		
		// add new comment
		const newComment =
			{
				id: nextIndex,
				username: "philzcoffee",
				text: val
			}
		
		post.comments.push(newComment)
		this.setState({postList: copyArr})
		this.saveToLocal('postList', copyArr)
	}
	
	deleteComment = (e, postId, commentId)=>{
		e.preventDefault();
		console.log('commentId', commentId)
		const copyArr = [...this.state.postList]
		const post = copyArr.find(el=>el.id === postId)
		const comment = post.comments.filter(comment=>comment.id !== commentId)
		console.log('copyArr', copyArr)
		console.log('post', post)
		console.log('comment', comment)
		console.log(' [...copyArr, {...post, comment}]',  [...copyArr, {...post, comment}])
		this.setState({postList: [...copyArr, post]})
	}
	
	saveToLocal = (key, value)=>{
		localStorage.setItem(key,  JSON.stringify(value))
	}
	
	getFromLocal = (key) => {
		return JSON.parse(localStorage.getItem(key))
	}
	
	clearCache = ()=>{
		localStorage.clear();
	}
	
	render(){
		let filteredArr;
		if(this.state.filteredQuery){
			const matcher = new RegExp(this.state.filteredQuery, 'i')
			filteredArr = this.state.postList.filter(post => matcher.test(post.username))
		}else{
			filteredArr = this.state.postList
		}
		return(
			<div className="">
				<SearchBar
					onQueryChange={this.onQueryChange}
					onSearchPost={this.onSearchPost}
					onLogout={this.props.onLogout}
				/>
				<PostContainer
					postList={filteredArr}
					onAddComment={this.addComment}
					onLikeClick={this.addLike}
					onDeleteComment={this.deleteComment}
					likedPosts={this.state.likedPosts}
				/>
			</div>
		)
	}
}
export default PostPage

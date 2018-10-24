import React from 'react'
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/CommentSection'
import LikeSection from './LikeSection'

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            likes: props.post.likes,
            username: 'Lorenzo',
            text: '',
            comments: props.post.comments
        }
    }
    addLike = () => {
        let counter = this.state.counter + 1
        this.setState({
        counter: counter 
        },
        console.log(this.state.likes))
    }

    AddedComment = event => {
        event.preventDefault()
        const commentsCopy = Object.assign([], this.state.comments)
        // const newComment = {text: this.state.text, username: 'LorenzoEvans'}
         commentsCopy.push({username: 'LorenzoEvans', text: this.state.text })
        // commentsCopy.push(newComment)
         this.setState({
             comments: commentsCopy,
             text: ''
         })
    }
    CommentHandler = event => {
        event.preventDefault()
        this.setState({
            text: event.target.value 
        })
    }
    render(){
        console.log(this.state.comments)
        console.log(this.props)
         return(
        <div>
         <PostHeader
        username={this.props.post.username}
        avatar={this.props.post.thumbnailImg}
         />
        <img alt="" src={this.props.post.imageUrl} />
        <div>{this.props.post.timestamp}</div>
       
        <LikeSection addLike={this.addLike} likes={this.state.likes} />
        {this.state.comments.map((index, comment) => <CommentSection post={this.props.post} key={comment.index} comments={comment} /> )}
        {/* <CommentSection post={this.props.post.comments.map((comment, index) => {index}, )} /> */}
        <form onSubmit={this.AddedComment}>
        <input
        type="text"
        value={this.state.text}
        onChange={this.CommentHandler}
        />
        </form>
        </div>
    )
    }
}

   
    
export default Post 
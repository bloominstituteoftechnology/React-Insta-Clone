import React from 'react'
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/Comment'
import LikeSection from './LikeSection'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Container = styled.div `
    display: flex ;
    justify-content: center ;
    flex-direction: column ;
`

const TimeStamp = styled.div `
margin: 10px 0 10px 0 ;
`

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            likes: props.post.likes,
            comments: props.post.comments,
            username: window.localStorage.getItem('user'),
            text: ''
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
        event.preventDefault();
        const commentsCopy = Object.assign([], this.state.comments);
        commentsCopy.push({ username: this.state.username, text: this.state.text });
        this.setState({
          comments: commentsCopy,
          text: ""
        });
      };
    
      CommentHandler = event => {
        event.preventDefault();
        this.setState({
          text: event.target.value
        });
      };

   
    render(){
    
         return(
        <Container>
      <PostHeader
        username={this.props.post.username}
        avatar={this.props.post.thumbnailUrl}
         />
        <img alt="" src={this.props.post.imageUrl} />
        <TimeStamp>{this.props.post.timestamp}</TimeStamp>
       
        <LikeSection addLike={this.addLike} likes={this.state.likes} />
            <CommentSection  comments={this.state.comments} />
            <form onSubmit={this.AddedComment}>
                   <input type='text' value={this.state.text} onChange={this.CommentHandler}>

                   </input>
               </form>
        </Container>
   
       
    )
    }
}

   
    
export default Post 
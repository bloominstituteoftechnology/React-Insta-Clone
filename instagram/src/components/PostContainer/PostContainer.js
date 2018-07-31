import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'
import './Post.css'

class PostContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            likes: props.data.likes,
            data: props.data
        }
    }

    plusLikes = () =>{        
        this.setState({likes : this.state.likes+1})
    }

    render(){ 
    console.log(this.state)   
    return(
        <div className = "post-container">
            
            <Post 
                name = {this.state.data.username}
                thumbImg = {this.state.data.thumbnailUrl}
                mainImg = {this.state.data.imageUrl}
                likes = {this.state.likes}    
                handleAddLike = {this.plusLikes}            
            />
            
            
            <CommentSection 
                data = {this.state.data}
            />
            
        </div>
    )}
}

export default PostContainer
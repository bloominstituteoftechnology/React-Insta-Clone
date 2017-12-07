import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:props.postData,
            newComment: {}
        };
        // console.log(this.state);
    }
    
    render(){
        return(
        <div className='container'>
            <div className='container__header'>
                <img className='container__header__thumbnail' alt='O yeah' src={this.state.data.thumbnailUrl}/>
                <h4>{this.state.data.username}</h4>
            </div>
            <div className='container__body'>
                <img className ='container__body__img' alt='O yeah'src ={this.state.data.imageUrl}/>
            </div>
            <div className='container__comments'>
            <CommentSection  timestamp = {this.state.data.timestamp} likes= {this.state.data.likes} comments={this.state.data.comments}/>    
            </div>
        </div>  
        )
    }
}

export default PostContainer;
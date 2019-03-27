import React, { Component } from 'react';
// import SearchBar from './SearchBar';
// import PostContainer from './PostContainer';

class CommentSection extends Component{
    constructor(props){
    super(props);
    console.log("inside CommentSection", props)
    this.state ={
        comments: props.passComment,
        commentText: ''
    };
    
}

    render(){
    return ( <>
        {this.state.comments.map((comments) => {
            return (
                <div className="userComment">
                    <span>{comments.username}</span>
                    <span>{comments.text}</span>
{/* user userComment to show username & text located in data comments */}
                </div>
             )
            })}</>
        
    )}}


 export default CommentSection;
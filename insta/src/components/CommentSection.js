import React from 'react';
// import SearchBar from './SearchBar';
// import PostContainer from './PostContainer';

class CommentSection extends React.Component{
    constructor(props){
    super(props);
    this.state ={
        comments: props.comments
    };
    console.log(props.comments);
}

    render(){
    return (
        {this.state.comments.map((comments) => {
            return (
                <div className="userComment" key={index}>
                    <span>{props.comments.username}</span>
                    <span>{props.comments.text}</span>
{/* user userComment to show username & text located in data comments */}
                </div>
             )
            })}
        
    )}}


 export default CommentSection;
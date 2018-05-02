import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
// import SearchBar from '../SearchBar/SearchBar'

class PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            newPostText: '',
            newPostUser: 'Unknown User'
        }
    }
    handleNewComment = (e) => {
        console.log('Hello from hanldeNewComment')
        this.setState( {newPostText: e.target.value} );
    }
    addNewPost(e){
        e.preventDefault();
        const newText = this.state.newPostText;
        this.setState( {newPostText: ''} )
        this.props.addNewPost(this.props.id, this.state.newPostUser, newText);
    }
    render(){
        return (
            <div>
                <h1>{this.props.postData.username}</h1>
                {/* <img src={this.props.postData.imageUrl} /> */}
                <br/>
                <div>
                    <i>icon-1</i>
                    <i>icon-2</i>
                </div>
                <div>
                    {this.props.postData.likes} likes
                </div>

                {/* ADD NEW POSTS */}
                <input
                    type="text"
                    name='comment'
                    placeholder='Add a comment...'
                    value={this.state.newPostText}
                    onChange={this.handleNewComment}
                />
                <button type="button" onClick={this.addNewPost.bind(this)}>+</button>

                {/* DISPLAY POSTS */}
                {
                    this.props.postData.comments.map( (comment, i) => <CommentSection key={i+comment.username} comment={comment} /> )
                }
            </div>
        )
    }
}

export default PostContainer;
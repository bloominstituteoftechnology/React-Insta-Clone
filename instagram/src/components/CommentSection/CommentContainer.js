import React from 'react';
import './CommentContainer.css'
import AddComment from './addComment'
class CommentContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: [],
            comments: [],
            username: 'Lorenzo',
            text: '',
            newComment: ''
        }
    }

    componentDidMount(){
        this.setState({
            post: this.props.data,
            comments: this.props.comments
        })
    }
   
    render(){
     return(
        <div className='CommentContainer'>
        {/* {this.state.comments.map(comment => <div key={comment.text}>
        <div> 
        {comment.username}:
        {' '}
        {comment.text}
        </div>
        {/* <div> {comment.text}</div> */}
        {/* </div>)} */}
        <AddComment AddedComment={this.AddedComment} CommentHandler={this.CommentHandler}/> 
        
        </div>
        )
    }
       


}

   

export default CommentContainer
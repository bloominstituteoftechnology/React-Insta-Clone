import React from 'react';
import './comment.css';
// import dummyData from '../../dummy-data';
import Comment from './Comment';
import PostContainer from '../Styled/Reusables';

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            commentInput: props.comments,
            newComment: '',
            // user: 'user'
        }
    }

    componentDidMount(){
        this.setState({
            commentInput: this.props.comments
        })      
    }

    handleComments = (e) => {
        // this.setState({commentInput: e.target.value});    
        this.setState({
            // [e.target.name]: e.target.value});  
            newComment: e.target.value 
        })
    }


    addNewComment = (e) => {
        e.preventDefault();
        const commentInputs = this.state.commentInput.slice();
        const retainNewComment = {username: `${localStorage.getItem('username')}`, text: this.state.newComment}
        console.log('retained..', retainNewComment)
        commentInputs.push(retainNewComment);
        this.setState({commentInput: commentInputs, newComment:''})
        // text: JSON.stringify(this.state.newComment

        // this.setState({ commentInput: [...this.state.commentInput, {username: this.state.user, 
        //     text: this.state.newComment }], newComment: '', placeholder: "Add a comment..."});
        // console.log(commentInput)
        // `@ ${localStorage.setItem('username')}`
        // this.setState({ commentInput: [...this.state.commentInput, {username: `${localStorage.setItem('username')}`,
        //  text: this.state.newComment }] , newComment: '', placeholder: "Add a comment..."});
        // console.log(commentInput)
        
    };

    // keepComment = (e) => {
    //     localStorage.setItem('newComment': commentInputs, newComment:'');
    // }

    render() {
        console.log("commentInput", this.state.commentInput)
        return (
            <div>
                <Comment comments={this.state.commentInput} />
                <form onSubmit={this.addNewComment}>
                <PostContainer>
                        <input placeholder={this.state.placeholder}
                            type="text"
                            name="newComment"
                            placeholder="Add a comment..."
                            value={this.state.newComment}
                            onChange={this.handleComments}
                        />
                        <div className="commentMenu">...</div>
                 </PostContainer>
                </form>
             </div>
        )
    }
}

export default CommentSection;


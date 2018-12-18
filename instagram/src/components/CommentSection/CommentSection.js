import React from 'react';
import './comment.css';
// import dummyData from '../../dummy-data';
import Comment from './Comment';

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            commentInput: props.comments,
            newComment: '',
            placeholder: "Add a comment..."
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
            [e.target.name]: e.target.value});  
    }


    addNewComment = (e) => {
        e.preventDefault();
        // const commentInputs = this.state.commentInput.slice();
        // const theComment = {
        //     username: 'Jamar', text: this.state.newComment
        // }
        // commentInputs.push({      
        //     commentInput: [...this.state.commentInput, {username: 'Jamar', text: this.state.newComment }]
        //     }
        // )
        this.setState({ commentInput: [...this.state.commentInput, {username: 'Jamar', text: this.state.newComment }], newComment: '', placeholder: "Add a comment..."});
        // console.log(commentInput)
 
    };

    render() {
        console.log("commentInput", this.state.commentInput)
        return (
            <div>
                <Comment comments={this.state.commentInput} />
                <form onSubmit={this.addNewComment}>
                    <div className="commentSectionContainer">
                        <input placeholder={this.state.placeholder}
                            type="text"
                            name="newComment"
                            value={this.state.newComment}
                            onChange={this.handleComments}
                        />
                        <div className="commentMenu">...</div>
                    </div>
                </form>
             </div>
        )
    }
}

export default CommentSection;


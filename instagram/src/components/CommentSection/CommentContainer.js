import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from './CommentSection';
import './CommentContainer.css'
import AddComment from './addComment'

class CommentContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            username: 'Lorenzo',
            text: '',
        }



    }

    componentDidMount(){
        this.setState({
            comments: this.props.comments
        })
    }

    // AddedComment = (event) => {
    //     event.preventDefault()
    //      const newComment = {username: 'LorenzoEvans', text: this.state.text }
    //      const comment = Object.assign([], this.state.comments)

    //         comment.push(newComment)

    //      this.setState({comment: newComment })
    // }

    // CommentHandler = (event) => {
    //     event.preventDefault()
    //     this.setState({
    //         text: event.target.value 
    //     })
    // }

    handleClick = () => {
        this.setState({

        })
    }

    addTodo = () => {
        const newCopy = this.state.comments.slice();
    }

    // CommentHandler = ({target}) => {
    //     // event.preventDefault();
    //     // event.stopPropagation()
    //     // this.setState({text: event.target.value});
    //     this.setState(function (state) {
    //         return({
    //             text: target.value 
    //         })
    // })

    //   };
    
    //   AddedComment= event => {
    //     event.preventDefault();
    //     let commentCopy = this.state.comments;
    //     event.stopPropagation();
    //     // const newComment = { text: event.target.value , username: 'LorenzoEvans' };

    //     // const comments = this.state.newComment
    //     this.state.comments.push({username: 'LorenzoEvans', text: this.state.text});
    //     this.setState(function (state) {
    //             return({
    //                 comments: commentCopy, text: ''
    //             })
    //     })
    //     // this.setState({ comment });
       
    //   };


    render(){
         return(
            <div className='CommentContainer'>
            
                {this.state.comments.map(comment => <div key={comment.text}>
                        <div> 
                        
                        {comment.username}:
                        {' '}
                        {comment.text}
                        </div>
                        {/* <div> {comment.text}</div> */}
                   
                   
                </div>)}
                 <AddComment text={this.state.text} AddedComment={this.AddedComment} CommentHandler={this.CommentHandler}/>
            </div>
        )
    }
       


}

   

export default CommentContainer
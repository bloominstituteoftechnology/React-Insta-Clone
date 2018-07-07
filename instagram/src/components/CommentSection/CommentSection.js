import React from 'react';
import Comment from './Comment'; 
import SubmitComment from './SubmitComment';
import CommentsHeader from './CommentsHeader';
import styled from 'styled-components';
import './commentSection.css'

const CommentSectionContainerStyles = styled.div`
    width:613px;
    margin-left:auto;
    margin-right:auto;
    border-left:1px solid #dbdbdb;
    border-right:1px solid #dbdbdb;
    border-bottom:1px solid #dbdbdb;
    margin-top:-4px;
    background-color:#ffffff;
`

// We are using a constructor here because of where it gets called in the lifecycle and logistics of passing data around
class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: "",
            numberOfLikes: props.numberOfLikes
        };
    }
    // Create a function in CommentSection.js called addNewComment that takes in an event 
    // and an index number. The function will add the comment that is on the event object to 
    // the post that is at that index number.
    // Pass the addNewComment function down the component tree to where ever you have your 
    // 'Add a comment...' input.

    componentDidMount() {
        // window.localStorage.setItem("comments", JSON.stringify(this.state.comments));
        // let commentStorage = [];
        // commentStorage.push(window.localStorage.getItem("comments"));

        if (window.localStorage.getItem("comments") === true) {
            this.setState({
                comments: JSON.parse(window.localStorage.getItem(`${this.state.comments[0].username}CommentStorage`))
            });
        }

        // console.log(commentStorage);
        console.log("doneDidMount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Prev CProps:", prevProps);
        console.log("Prev CState:", prevState);

        window.localStorage.setItem(`${this.state.comments[0].username}CommentStorage`, JSON.stringify(this.state.comments));
        // console.log(window.localStorage.getItem(`${this.state.comments[0].username}commentStorage`))

        // window.localStorage.setItem(`${this.state.comments[0].username}NumberOfLikes`, JSON.stringify(this.state.numberOfLikes));
        // console.log(window.localStorage.getItem(`${this.state.numberOfLikes}NumberOfLikes`))


        console.log(this.state.comments)
      }
    
    addNewComment = (event,index) => { 
        event.preventDefault();
        const comments = this.state.comments.slice();
        const newComment = {
            username: "DefaultUsername",
            text: this.state.comment
        }
        comments.push(newComment);
        this.setState({comments: comments, comment: ""});
        console.log("Done adding comment")

    }
    
    changeAddNewCommentHandler = event => {
        console.log(event.target.value);
        this.setState({comment:event.target.value});
    }

    likeAPost = (event,index) => {
        let numberOfLikes = this.state.numberOfLikes;
        numberOfLikes = numberOfLikes + 1;
        this.setState({numberOfLikes:numberOfLikes});
    }

    render() {
        return (
            <CommentSectionContainerStyles>
            <div>
                <CommentsHeader 
                    numberOfLikes = {this.state.numberOfLikes}
                    likeAPost = {this.likeAPost}
                />

                {this.state.comments.map((comment,index) => (
                    <Comment 
                        key = {index}
                        commentUsername = {comment.username}
                        commentText = {comment.text}
                    />
                ))} 

                <SubmitComment 
                    activeValue = {this.state.comment}
                    onChangeSignal = {this.changeAddNewCommentHandler}
                    addNewComment = {this.addNewComment}
                />
            </div>
            </CommentSectionContainerStyles>
        );
    }
}

// const CommentSection = props => {
//     return (
//         <div>
//             {props.comments.map(comment => (
//                 <Comment 
//                     commentUsername = {comment.username}
//                     commentText = {comment.text}
//                 />
//             ))}
//             <SubmitComment />
//         </div>
//     );
// }

export default CommentSection;



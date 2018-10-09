import React from 'react';
import './CommentSection.css';


export default class CommentSection extends React.Component{
    constructor(props){
        super(props);
    }
    // addNewComment = event => {
    //     if (event.key === 'Enter'){
    //         let commentsArr = this.props.dataComments[0];
    //         commentsArr.push({username: "CJuelfs15", text: event.target.value});
    //         this.setState({
    //             dataComments: commentsArr,
    //         });
    //         event.target.value = '';
    //     }
    // }
    addNewComment = (event, index) => {
        event.preventDefault();
        if (event.key === 'Enter'){
            let commentsArr = this.props.dataComments[0];
            let commentsList = commentsArr.map(function(commentGrp){
              return (
                commentGrp.map(function(comment){
                  return (
                    comment
                  )
                })
              )
            })
            commentsList.push({
              username: "CJuelfs15",
              text: event.target.value
            });
            this.setState({
                dataComments: commentsList,
            });
            event.target.value = '';
        } 
        console.log('works')
      }
    render(){
        return (
            <div className='individual-comment'>
                <span className='comment-username'>{this.props.commentUsername}</span>
                <span className='comment-text'>{this.props.commentText}</span>
            </div>
        );
    }
}
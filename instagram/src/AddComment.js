import React, {Component} from 'react';

export default class AddComment extends Component {
    constructor(props){
        super(props);
    }
    addComment = (e) => {
        e.preventDefault();
        this.props.post.setState((e)=>{
        
            this.props.comments.push({
                            CommentId: this.props.comments.length + 1,
                            UserPosted: window.localStorage.getItem('username'),
                            UserPic: './assets/no-photo.png',
                            UserPostedId: window.localStorage.getItem('userUd'),
                            PostedComment: document.getElementById(this.props.comments.length + 1).value
                        })
                        
    });
   
    }
    render(){
        return(
            <div className="add_comment">
                <form onSubmit={this.addComment} >
                    <input id={this.props.comments.length + 1} placeholder="Add Comment" />
                </form>
            </div>
        );
    }
}
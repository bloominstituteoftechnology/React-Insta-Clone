import React, { Component } from 'react';
import './Comments.css'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: {
                username: 'a_new_user',
                text: ''
            }
        }
    }

    handleCommentInput = (e) => {
        this.setState({ 
            newComment: {
                username: this.state.newComment.username,
                text: e.target.value 
            }
        })
    }

    AddComment = (e) => {
        e.preventDefault();
        const commentListArray = this.state.comments;
        const newComment = {
            username: this.state.newComment.username,
            text: this.state.newComment.text
        };
        commentListArray.push(newComment);
        this.setState({
            comments: commentListArray,
            newComment: {
                username: 'a_new_user',
                text: ''
            }
        })
    }

    //from tutorial
    //save session state to localstorage
    // saveStateToLocalStorage() {
    //     for (let key in this.state) {
    //         localStorage.setItem(key, JSON.stringify(this.state[key]))
    //     }
    // }
    // //set localstorage as component state
    // //this is the name of the method on LocalStorage
    // hydrateStateWithLocalStorage() {
    //     for(let key in this.state) {
    //         if(localStorage.hasOwnProperty(key)) {
    //             let value = localStorage.getItem(key);
    //             try {
    //                 value = JSON.parse(value);
    //                 this.setState({ [key]: value })
    //             }
    //             catch(e) {
    //                 this.setState({ [key]: value})
    //             }
    //         }
    //     }
    // }

    // //add a componentDidMount() to render the data from LocalStorage
    // componentDidMount() {
    //     this.hydrateStateWithLocalStorage();
    //     window.addEventListener(
    //         "beforeunload",
    //         this.saveStateToLocalStorage.bind(this)
    //     );
    // }

    // //add a componentWillUnmount() to update state saved to LocalStorage
    // componentWillUnmount() {
    //     window.removeEventListener(
    //         "beforeunload",
    //         this.saveStateToLocalStorage()
    //     );
    // }
    
    render() {
        const { comments } = this.state;
        const { text } = this.state.newComment;
        return (
            <div className="Comments">
                <div> {comments.length === 0 ? (
                    <p>"no props yet"</p>
                    ) : (
                        <div>
                            <div>{comments.map((comment, i) => {
                                return (
                                    <div key={i}>
                                    <div>{`${comment.username} says ${comment.text}`}</div>
                                    </div>
                                )
                            })}</div>
                            <div>
                                <form onSubmit={this.AddComment}>
                                    <input 
                                        placeholder="enter a comment"
                                        name="comment"
                                        type="object"
                                        value={text}
                                        onChange={this.handleCommentInput}
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}
                
export default Comments;
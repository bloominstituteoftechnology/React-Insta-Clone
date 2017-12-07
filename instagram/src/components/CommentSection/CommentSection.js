import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            postDate: '',
            comments: [],
            newText: 'Add a comment...',
        }
    }
    componentDidMount() {
        this.setState({id: this.props.id});
        this.props.comments.forEach(comment => {
            let myArr = this.state.comments;
            myArr.push(comment);
            this.setState({comment: myArr, postDate: this.props.date});
        });
    }

    handleReturn = (evt) => {
        if(evt.keyCode === 13) { // When enter is pressed do this
            let craftedComment = {username: 'designerexpert', text: this.state.newText
            };
            let commentsCopy = this.state.comments; // Make copy of current comments array

            commentsCopy.push(craftedComment); // push crafted comments into copy of comments array

            this.setState({comments: commentsCopy, newText: ''});
        } else if (this.state.newText === 'Add a comment...') { // When it is clicked do this
            this.setState({newText: ''});
        }
    }

    handleText = (evt) => {
        this.setState({newText: evt.target.value});
    }

    render() {
        return (<div className="Comment--Wrapper">
            {this.state.comments.map((comment, i) => {
                return (
                    <div key={i} className="Comment">
                        <div className="User">
                            {comment.username}
                        </div>
                        <div className="Text">
                                {comment.text}
                        </div>
                    </div>
                );
            })}
            <div className="Post__Time">
                Posted on: {this.state.postDate}
            </div>
            <div className="Divider">
                <hr/>
            </div>
            <div className="Add">
                <input id={`commentBox__${this.state.id}`} type="text" onChange={this.handleText} onKeyDown={this.handleReturn} onClick={this.handleReturn} className="Add__Comment" value={this.state.newText}>
                </input>
                ...
            </div>
            </div>
        );
        
    }
}

export default CommentSection;
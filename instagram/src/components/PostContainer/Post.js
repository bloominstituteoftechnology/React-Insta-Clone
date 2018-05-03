import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';


import { Card, CardImg, CardBody, CardLink, Button } from 'reactstrap';

class Post extends Component {
    constructor (props) {
        super(props)
        this.state = {
            commentInput : "",
            comments: props.comments
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log(e.key)
        if (e.key === "Enter") {
            this.setState({
                comments: [...this.state.comments, {username: "stranger", text: this.state.commentInput}],
                commentInput: ""
            })
        }
    }
    render() {
        const { username, thumbnailUrl, imageUrl, likes, timestamp } = this.props
        const { comments, commentInput } = this.state
        return ( 
        <div>
            <Card>
                <div className="user">
                        <div className="thumbnail">{thumbnailUrl}</div>
                        <div className="username">{username}</div>
                </div>
                <CardImg className="image" src={imageUrl} />
                <CardBody>
                <div className="reaction">
                    <div className="action">
                        <CardLink className="hearIcon">Like</CardLink>
                        <CardLink className="commentIcon">Comment</CardLink>
                    </div>
                    <div className="likes">{likes}</div>
                    <CommentSection comments={comments} />
                    <div className="timestamp">{timestamp}</div>
                    <div className="commentBar">
                        <input 
                            name="commentInput" 
                            type="text" 
                            value={commentInput} 
                            onChange={e => this.handleChange(e)}
                            onKeyPress={e => this.handleSubmit(e)}/>
                        <div className="moreIcon"></div>
                    </div>
                </div>
                </CardBody>
            </Card>
        </div>
        )
    }
}

export default Post;
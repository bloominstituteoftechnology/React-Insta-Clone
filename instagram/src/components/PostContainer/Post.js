import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';


import { Card, CardImg, CardBody, CardLink, Button } from 'reactstrap';

class Post extends Component {
    constructor (props) {
        super(props)
        this.state = {
            commentInput : ""
        }
    }
    componentWillReceiveProps = (prevProps, nextProps) =>{
        if (prevProps.comments !== nextProps.comments) {
            this.setState({
                commentInput: ""
            })
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        const { id, username, thumbnailUrl, imageUrl, timestamp, likes, comments, handleLike, handleSubmit } = this.props
        const { commentInput } = this.state
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
                        <CardLink className="hearIcon" onClick={e => handleLike(id)}>Like</CardLink>
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
                            onKeyPress={e => handleSubmit(e, id, commentInput)}/>
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
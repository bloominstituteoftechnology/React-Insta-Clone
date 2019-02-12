import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardHeader, CardFooter, CardBody,
    Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import Comments from '../CommentSection/Comments';
  

class Post extends Component {
    constructor(props){
        super(props)
        this.post = props.post
        this.state = {
            modal: false,
            commentText: '',
            comments: this.props.post.comments,
            likes: this.props.post.likes
        }

        this.toggleComments = this.toggleComments.bind(this);
    }

    toggleComments = () => {

        this.setState({
            modal: !this.state.modal
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addComment = e => {
        e.preventDefault();

        console.log(localStorage)
        let user = localStorage.getItem('user');

        this.setState({
            comments: [...this.state.comments, {text: this.state.commentText, username: user}],
            commentText: ''
        })
    }

    likePost = e => {
        e.preventDefault();

        this.setState({
            likes: this.state.likes + 1
        })
    }


    render(){

        return (
            <div className='row'>
                <>
                    <Card>
                        <CardHeader>
                            <img src={this.post.thumbnailUrl} alt='User Thumbnail'/>
                            <p>{this.post.username}</p>
                        </CardHeader>
                        <CardBody>
                            <img src={this.post.imageUrl} alt='Post'/>
                        </CardBody>
                        <CardFooter>
                            Posted: {this.post.timestamp}
                            <div>
                                <Button onClick={this.toggleComments}><i className="far fa-comment"> {this.state.comments.length}</i></Button>{' '}
                                <Button onClick={this.likePost}><i className="far fa-heart"> {this.state.likes}</i></Button> 
                            </div>
                        </CardFooter>
                    </Card>
    
                    <Modal isOpen={this.state.modal} toggle={this.toggleComments} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>{this.post.username}'s Post</ModalHeader>
                        <ModalBody>
                           <Comments comments={this.state.comments}/>
                        </ModalBody>
                        <ModalFooter>
                            <form onSubmit={this.addComment}>

                                <input 
                                    type='text'
                                    name='commentText'
                                    placeholder='Start typing here...'
                                    value={this.commentText}
                                    onChange={this.handleChange}
                                />
                                <Button color="primary" type='submit'>Add comment</Button>{' '}
                                <Button color="secondary" onClick={this.toggleComments}>Close</Button>
                            </form>
                        </ModalFooter>
                    </Modal>
                </>
            </div>
        )
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })),
        imageUrl: PropTypes.string,
        likees: PropTypes.number,
        modal: PropTypes.bool,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string
    }),
    toggleComments: PropTypes.func
}

export default Post;
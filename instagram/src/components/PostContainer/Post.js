import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardHeader, CardFooter, CardBody,
    Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import Comments from '../CommentSection/Comments';
  

class Post extends Component {
    constructor(props){

        console.log(props)
        super(props)
        this.post = props.post
        this.state = {
            modal: false
        }

        this.toggleComments = this.toggleComments.bind(this);
    }

    toggleComments = () => {

        this.setState({
            modal: !this.state.modal
        }, console.log(this))


        // console.log(post)
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
                            <Button color="danger" onClick={this.toggleComments}>Comments</Button>
                        </CardBody>
                        <CardFooter>
                            Posted: {this.post.timestamp}
                        </CardFooter>
                    </Card>
    
                    <Modal isOpen={this.state.modal} toggle={this.toggleComments} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>{this.post.username}'s Post</ModalHeader>
                        <ModalBody>
                           <Comments comments={this.post.comments}/>
                        </ModalBody>
                        <ModalFooter>
                            {/* <Button color="primary" onClick={this.toggleComments}>Do Something</Button>{' '} */}
                            <Button color="secondary" onClick={this.toggleComments}>Close</Button>
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
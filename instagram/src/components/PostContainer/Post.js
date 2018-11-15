import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardHeader, CardFooter, CardBody,
    Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
  

const Post = props => {

    return (
        <div className='row'>
            <>
                <Card>
                    <CardHeader>
                        <img src={props.post.thumbnailUrl} alt='User Thumbnail'/>
                        <p>{props.post.username}</p>
                    </CardHeader>
                    <CardBody>
                        <img src={props.post.imageUrl} alt='Post'/>
                        <Button onClick={()=> props.toggleComments(props.post)}>Go somewhere</Button>
                    </CardBody>
                    <CardFooter>
                        Posted: {props.post.timestamp}
                    </CardFooter>
                </Card>

                <Modal isOpen={props.post.modal} toggle={()=> props.toggleComments(props.post)} className='modal'>
                    <ModalHeader toggle={()=> props.toggleComments(props.post)}>Comments</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=> props.toggleComments(props.post)}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={()=> props.toggleComments(props.post)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        </div>
    )
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
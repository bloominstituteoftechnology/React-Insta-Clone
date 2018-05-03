import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import moment from 'moment'
import CommentSection from '../CommentSection/CommentSection';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faComment from '@fortawesome/fontawesome-free-regular/faComment'
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart'

import { Row } from 'reactstrap';
import { Card, CardImg, CardBody, CardLink } from 'reactstrap';

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
        console.log(thumbnailUrl)
        let formatTimestamp = moment(timestamp, 'MMMM Do YYYY, h:mm:ss a').startOf('hour').fromNow().toUpperCase()
        return ( 
        <div className="rootPost">
            <Card>
                <Row className="user">
                    <img className="thumbnail" src={thumbnailUrl} alt="Thumbnail for a user"/>
                    <div className="username">{username}</div>
                </Row>
                <CardImg className="image" src={imageUrl} />
                <CardBody>
                <div className="reaction">
                    <div className="action">
                        <CardLink className="hearIcon" onClick={e => handleLike(id)}>
                            <FontAwesomeIcon icon={faHeart} />
                        </CardLink>
                        <CardLink className="commentIcon">
                        <FontAwesomeIcon icon={faComment} />
                        </CardLink>
                    </div>
                    <div className="likes">{likes} likes</div>
                    <CommentSection comments={comments} />
                    <div className="timestamp">{formatTimestamp}</div>
                    <div className="commentBar">
                        <input 
                            name="commentInput" 
                            type="text" 
                            placeholder="Comment here..."
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

Post.propTypes = {
    id: PropTypes.number.isRequired, 
    username: PropTypes.string.isRequired, 
    thumbnailUrl: PropTypes.string.isRequired, 
    imageUrl: PropTypes.string.isRequired, 
    timestamp: PropTypes.string.isRequired, 
    likes: PropTypes.number.isRequired, 
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ), 
    handleLike: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Post;
import React from 'react'
import PropTypes from "prop-types"
import CommentSection from './CommentSection'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap'

const PostContainer = props => {
    console.log("rendering")
    console.log(props.post)
    return (
        <div>
            {props.post.map(post => (
                <Card key={post.timestamp} className="post">
                    <div className='post-header'>
                        <CardImg src={post.thumbnailUrl} alt={post.username} />
                        <CardTitle className='post-title'>{post.username}</CardTitle>
                    </div>
                    <CardImg src={post.imageUrl} alt={post.username} />
                    <CardBody>
                        <div className='heart-n-comment'>
                            <FontAwesomeIcon className='post-heart' icon={faHeart} size='lg' />
                            <FontAwesomeIcon className='post-comment' icon={faComment} size='lg' />
                        </div>
                        <div className='likes'>
                            <strong>{post.likes} likes</strong>
                        </div>
                        <CommentSection comments={post.comments} />
                    </CardBody>

                </Card>
            ))}

        </div>
    )

}

PostContainer.propTypes = {
    post: PropTypes.arrayOf(
      PropTypes.shape({
        timestamp: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
      })
    )
  };

export default PostContainer
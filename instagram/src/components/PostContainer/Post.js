import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const PostContainer = props => {
    return (
        props.data.map(user => {
            return (
                <div className='post-container container-fluid'>
                    <Card className='card'>
                        <div className="card-header">
                            <img className="thumbnail" src={user.thumbnailUrl} />
                            <span className="bold-text">{user.username}</span>
                        </div>
                        <CardImg top width="100%" src={user.imageUrl} alt="Card image cap" />
                        <CardBody>
                            <div>
                                <i className="far fa-heart fa-lg mr-3"></i>
                                <i className="far fa-comment fa-lg fa-flip-horizontal"></i>
                            </div>
                            <p className='bold-text mt-2 mb-2'>{user.likes + ' likes'}</p>
                            {user.comments.map(comment => {
                                return <p className="comment"><span className="bold-text">{comment.username}</span> {comment.text}</p>
                            })}
                            <hr />
                            <input className='comment-input' type="text" placeholder="..add comment" />
                        </CardBody>
                    </Card>
                </div>
            )
        })
    )
}

export default PostContainer;
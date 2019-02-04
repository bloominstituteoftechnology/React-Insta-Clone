import React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';
import './PostContainer.css';
import OpenHeart from '../../assets/like.png';
import OpenComment from '../../assets/comment.png';
const PostContainer = (props) => {
    
    return (
        <div className="postwrapper">
        {props.data[0].map(obj => {
            return (
                <Card className="card">
                    <div className = "profileAndUsername">
                        <img className = "profilePic" src ={obj.thumbnailUrl} alt = "tmbnl"/>
                        <p className = "userhandle">{obj.username}</p>
                        </div>
                       
                    <CardImg top width="100%" src={obj.imageUrl} alt ="postImg"/>
                    <div className = "reactionIcons">
                            <img className = "like" src = {OpenHeart} alt ="like"/>
                            <img className = "comment" src = {OpenComment} alt = "comment"/>
                        </div>
                    <p className = "numberOfLikes">{obj.likes} likes</p>
                    <CardBody>
                        {obj.comments.map(comment => {
                            return (
                                <div className="comment">
                                    <div>
                                        <strong>{comment.username + "  "}</strong>
                                        {comment.text}
                                    </div>
                                        
                                </div>
                                )
                            })}
                    </CardBody>
                    <div className = 'timestamp'>
                        {obj.timestamp}
                    </div>
                </Card>   
            )   
        })};
        </div>
    );        
}
export default PostContainer;


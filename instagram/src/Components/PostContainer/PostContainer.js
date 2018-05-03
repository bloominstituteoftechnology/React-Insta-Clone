import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './PostContainer.css';
import OpenHeart from '../../assets/like.png';
import OpenComment from '../../assets/comment.png';
import CommentSection from '../CommentSection/CommentSection'
const PostContainer = (props) => {
    console.log("PROPS: ", props);
    return (
        
        props.data.map((obj) => {
            return (
                <div className = "postwrapper" key={obj.username + obj.thumbnailUrl + obj.imageUrl + obj.likes +obj.timestamp}>
                    <Card>
                        <div className = "profileAndUsername">
                        <img className = "profilePic" src = {obj.thumbnailUrl} alt = "tmbnl"/>
                        <p className = "userhandle">    {obj.username}</p>
                        </div>
                       
                        <CardImg top width="100%" src={obj.imageUrl} alt ="postImg"/>
                        <div className = "reactionIcons">
                        <img className = "like" src = {OpenHeart} alt ="like"/>
                        <img className = "comment" src = {OpenComment} alt = "comment"/>
                        </div>
                        <p className = "numberOfLikes">{obj.likes} likes</p>
                        <CardBody>
                        <CardTitle>CommentSection</CardTitle>
                        <CardSubtitle>goes</CardSubtitle>
                        <CardText>here</CardText>
                        </CardBody>
                        <div className = 'timestamp'>{obj.timestamp}</div>
                    </Card>
                    
                    
                    
                    
                    
                        
                </div>
            );
        })
    );        
}

        
  
export default PostContainer;


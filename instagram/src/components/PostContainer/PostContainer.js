import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { Container, Row, Col } from 'reactstrap';
import './postContainer.css';




const PostContainer = (props) =>{
    





        return (
            
            <Container className={'maincontainer'}>
            <div className={'user'}>
                <h1 className={'posttitle'}><img className={'avatar'} src={props.postData.thumbnailUrl}/>  {props.postData.username}{props.value}</h1>
                </div>
                
                <img src={props.postData.imageUrl}/>
                <div className ={'posticons'}>
                <i class="far fa-heart" onClick={((e) => props.increment(e))} likes={'one'}></i> <i class="far fa-comment"></i>
                </div>
                <div className={'likes'}>
                {props.postData.likes} likes
                </div>

                
                <CommentSection comments={props.postData.comments}/>
                <div className={'timeposted'}>
                {props.postData.timestamp}
                </div>
                <div className={'commentcontainer'}>
            <input className={'commenttext'} type="text" placeholder='Add a comment...'/>
            <i class="fas fa-ellipsis-h"></i>
            </div>

            </Container>
                
        )
    
}

export default PostContainer;

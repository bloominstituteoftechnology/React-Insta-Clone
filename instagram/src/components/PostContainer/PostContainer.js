import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { Container, Row, Col } from 'reactstrap';
import './postContainer.css';




const PostContainer = (props) =>{




        return (
            
            <Container className={'maincontainer'}>
                <h1 className={'posttitle'}><img className={'avatar'} src={props.postData.thumbnailUrl}/>{props.postData.username}</h1>
                <img src={props.postData.imageUrl}/>
                
                
                <CommentSection comments={props.postData.comments}/>
            </Container>
                
        )
    
}

export default PostContainer;

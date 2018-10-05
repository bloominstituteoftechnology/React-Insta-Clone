import React from 'react';
import {
    CardImg,
    Card,
    CardTitle,
   
  } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';



const PostContainer = props => {
    return (
        <Card>
            {props.dummyData.map((data) =>
            <div>
            <CardTitle>
                    <img src={data.thumbnailUrl}/><p>{data.username}</p>
            </CardTitle>
            <CardImg top width="100%" src={data.imageUrl} alt="Card image"/>
            <CommentSection dummyData={props.dummyData} data={data}/>
            </div> )}
            
        </Card> 
    ) 
         
};

export default PostContainer;


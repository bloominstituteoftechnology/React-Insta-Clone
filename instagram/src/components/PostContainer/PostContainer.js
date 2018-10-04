import React from 'react';
import {
    CardImg,
    Card,
    CardTitle,
    Media,
   
  } from 'reactstrap';




const PostContainer = props => {
    return (
        <Card>
        {props.dummyData.map((data) => 
          <div>
            <CardTitle>
              <img src={data.thumbnailUrl}/><p>{data.username}</p>
            </CardTitle>
            <CardImg top width="100%" src={data.imageUrl} alt="Card image"/>
          </div> 
        )}
      </Card> 
    ) 
         
};

export default PostContainer;


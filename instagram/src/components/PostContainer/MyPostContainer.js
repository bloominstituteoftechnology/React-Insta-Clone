import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import dummyData from '../../dummy-data.js';
let heart = '\u03A9';
const MyPostContainer = props => {
    return (
        <div>   
        <div>{props.dData.map((myData, index) =>
            <Card key={"MyPostContainer" + index} class="allData"> 
                <CardBody>
                    <CardTitle className="Header d-flex">
                        <div className="Header__Img ">
                            <CardImg className="Header__thumbnail rounded-circle" src={myData.thumbnailUrl}  /> 
                        </div>
                        <div className="Header__User align-self-center col-3 justify-content-start">
                            {myData.username} 
                        </div>
                    </CardTitle>
                    <div>
                        <CardImg className="Image " src={myData.imageUrl}  />
                    </div>
                    <h2 className="Emoji ">
                    ♡ 
                    </h2>
                    <CardSubtitle>
                    {myData.likes} Likes 
                    </CardSubtitle>

                        <CommentSection myComments={myData.comments} />

                    <div>
                        {myData.timestamp}
                    </div>
                </CardBody>
            </Card>)}
        </div>  
    </div>
    )
};

export default MyPostContainer;
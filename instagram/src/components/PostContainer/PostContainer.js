import React from "react";
import "./PostContainer.css";
import { CommentSection } from "./components/CommentSection/CommentSection.js";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

export const PostContainer = (props) => {
    return (
        <div>
            {props.post.map((usrInfo => {
                return(
                    <div class= "col-md-4">
                        <Card>
                            <CardBody>
                                <img class="thumbnail rounded-circle" src={usrInfo.thumbnailUrl}></img>
                                {usrInfo.username}
                            </CardBody>
                            <CardImg top-width="100%" src={usrInfo.imageUrl} />
                            <CommentSection comment = {usrInfo.comments} />
                        </Card>
                    </div>
                )
            }))}
        </div>
     ) 
}



// props.post.map((usrInfo => {
//     <div>
//         <Card>
//             <CardImg top-width="100%" src={usrInfo.thumbnailUrl} />
//         </Card>
//         <h1> hi </h1>
//     </div>
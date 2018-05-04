import React from "react";
// import CommentSection from '../CommentSection/CommentSection.js';
import PostImg from './PostImg.js';
import PostUsername from "./PostUsername.js";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardSubtitle,
    Row
} from 'reactstrap';

const PostContainer = props => {
    console.log("Props", props);
    // return <div>{props.containerProps.map((arrKeys, i) => {

    //     // return (<IgPost key = {i} arrKeys = {arrKeys}/>); //ask Jeff or Thuy about whats happening here
    
    // } )}</div>;
    // <PostContainer containerProps= {dummyData}/>
    return (
        <Card>
            <CardBody>
                <row>
                    <React.Fragment>
                    <PostImg imgSource={ props.imgSource } />
                    <PostUsername usernameSource= "hello kitty" />
                    </React.Fragment>
                    <img 
                        style={{borderRadius: 90}}
                        className="img-thumbnail"
                        src={props.thumbnailUrl}
                        alt="none yet"
                    />
                    <CardSubtitle className="cardSubtitle">
                        {props.username}
                    </CardSubtitle>
                </row>
            </CardBody>
            <CardImg className="postImage" src={props.imageUrl} alt="none yet"></CardImg>
        </Card>
    );
        

} 
export default PostContainer;
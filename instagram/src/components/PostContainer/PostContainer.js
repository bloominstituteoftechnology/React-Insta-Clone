import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'
import {Card,
        CardImg,
        CardText,
        CardBody,
        CardLink,
        CardTitle,
        CardSubtitle,
        CardHeader,
        InputGroup,
        InputGroupAddon,
        InputGroupText,
        Input } from 'reactstrap';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import MdChatBubbleOutline from 'react-icons/lib/md/chat-bubble-outline';
// import SearchBar from '../SearchBar/SearchBar'



class PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            newPostText: '',
            newPostUser: 'Unknown User'
        }
    }
    handleNewComment = (e) => {
        console.log('Hello from hanldeNewComment')
        this.setState( {newPostText: e.target.value} );
    }
    addNewPost(e){
        console.log('Hello from addNewPost')
        // e.preventDefault();
        if (e.key === 'Enter')    {
            const newText = this.state.newPostText;
            this.setState( {newPostText: ''} )
            this.props.addNewPost(this.props.id, this.state.newPostUser, newText);
        }
    }
    render(){
        return (
            <Card className="text-left">
                <CardHeader className="">
                    <div className="row">
                        <figure className="col-2 figure">
                            <img className="figure-img img-circle custom-img" src={this.props.postData.thumbnailUrl} />
                        </figure>                        
                        <CardText className="col-img-10 align-middle" >{this.props.postData.username}</CardText>
                    </div>
                </CardHeader>
                    <img className="custom-img" src={this.props.postData.imageUrl} />
                <CardBody>
                    <CardText>
                        <FaHeartO /> <MdChatBubbleOutline />
                    </CardText>
                    <CardText>
                        {this.props.postData.likes} likes
                    </CardText>

                    {/* DISPLAY POSTS */}
                    {
                        this.props.postData.comments.map( (comment, i) => <CommentSection key={i+comment.username} comment={comment} /> )
                    }
                    {/* ADD NEW POSTS */}

                </CardBody>
                <InputGroup>
                    <Input
                        placeholder="Add a comment..." 
                        value={this.state.newPostText}
                        onChange={this.handleNewComment}
                        onKeyPress={this.addNewPost.bind(this)}
                    />  {/* onKeyPress={ (e) => {this.addNewPost(e)}} // ADD NEW POST EVENT: THIS ALSO WORKS */}
                    <InputGroupText
                        addonType="append"
                    >...</InputGroupText>
                    {/* <button type="button" onClick={this.addNewPost.bind(this)}>+</button> */}
                </InputGroup>
            </Card>
        )
    }
}

export default PostContainer;
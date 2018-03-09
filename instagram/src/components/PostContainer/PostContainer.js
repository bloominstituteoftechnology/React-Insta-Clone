import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/fontawesome-free-solid';
import { faHeart as farHeart } from '@fortawesome/fontawesome-free-regular';
import { faComment as farComment } from '@fortawesome/fontawesome-free-regular';
import { faBookmark as farBookmark } from '@fortawesome/fontawesome-free-regular';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';


    class PostContainer extends Component {
        constructor() {
            super();
            this.state = {
                id: 0,
                likes: 0,
                imageUrl: '',
                thumbnailUrl: '',
                username: '',
                timestamp: '',
                likedPost: false,
                bookmarkedPost: false,
            }
        }
    
        componentDidMount() {
            this.setState({
                likes: this.props.post.likes,
                id: this.props.id,
                imageUrl: this.props.post.imageUrl,
                thumbnailUrl: this.props.post.thumbnailUrl,
                timestamp: this.props.post.timestamp,
                username: this.props.post.username,
                bookmarkedPost: this.props.post.bookmarkedPost,
            })
            
        }
    
        likePost = (event) => {
            const likedPost = this.state.likedPost;
            const totalLikes = this.state.likes;
            if (!likedPost) {
                this.setState({likes: totalLikes + 1});      
            } else {
                this.setState({likes: totalLikes - 1});      
            }
            this.setState({likedPost: !likedPost});
        }

        bookmarkPost = (event) => {
            const bookmarkedPost = this.state.bookmarkedPost;
            this.setState({bookmarkedPost: !bookmarkedPost});
        }

        targetCommentInput = (event) => {
            document.getElementById(`CommentSection__${this.state.id}`).focus();
        }
    
        render() {
            const heartStatus = this.state.likedPost ?  ['fas', 'heart'] : ['far', 'heart'] ;
            const bookmarkStatus = this.state.bookmarkedPost ?  ['fas', 'bookmark'] : ['far', 'bookmark'] ;
            const heartStyles = this.state.likedPost ?  { color: 'red' } : { color: 'black' };
            return (
                <div>
                    <Container>
                        <Row className="justify-content-center">
                            <Card className="PostContainer">
                                <CardBody>
                                    <div className="PostContainer__thumbnail justify-content-start">
                                        <img src={this.state.thumbnailUrl} className="border rounded-circle border-light" />
            
                                        <span className="ml-2">{this.state.username}</span>
                                    </div>
                                </CardBody>
                                <CardImg width="100%" className="PostContainer__img" src={this.state.imageUrl} />
            
                                <CardBody>
                                <div className="PostContainer__misc d-flex">
                                    <span><FontAwesomeIcon icon={heartStatus} style={heartStyles} className="fa-lg" onClick={this.likePost}/></span>
                                    <span><FontAwesomeIcon icon={farComment} className="fa-lg" flip="horizontal" onClick={this.targetCommentInput} /></span>
                                    <span className="ml-auto"> <FontAwesomeIcon icon={bookmarkStatus} className="fa-lg" onClick={this.bookmarkPost}/></span>
                                </div>
                                <div className="PostContainer__likes">
                                    <span>{this.state.likes} likes</span>
                                </div>
                                <div>
                                
                                    <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp} id={this.props.id} />
                                    
                                </div>
                                </CardBody>
                            </Card>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
    
    export default PostContainer;
    


/*
const PostContainer = (props) => {
    const post = props.post;
    return (
    <div>
        <Container>
            <Row className="justify-content-center">
                <Card className="PostContainer">
                    <CardBody>
                        <div className="PostContainer__thumbnail justify-content-start">
                            <img src={post.thumbnailUrl} className="border rounded-circle border-light" />

                            <span className="ml-2">{post.username}</span>
                        </div>
                    </CardBody>
                    <CardImg width="100%" className="PostContainer__img" src={post.imageUrl} />

                    <CardBody>
                    <div className="PostContainer__misc d-flex">
                        <span><FontAwesomeIcon icon={farHeart} className="fa-lg"/></span>
                        <span><FontAwesomeIcon icon={farComment} className="fa-lg" flip="horizontal"/></span>
                        <span className="ml-auto"> <FontAwesomeIcon icon={farBookmark} className="fa-lg"/></span>
                    </div>
                    <div className="PostContainer__likes">
                        <span>{post.likes} likes</span>
                    </div>
                    <div>
                    
                        <CommentSection comments={post.comments} timestamp={post.timestamp} />
                        
                    </div>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    </div>
    );
}

export default PostContainer;

*/
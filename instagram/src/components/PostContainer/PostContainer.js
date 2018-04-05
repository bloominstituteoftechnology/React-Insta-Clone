import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import logo from './../../logo.svg';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: props.postData,
            newComment: ''
        };
    }

    // componentDidMount = (props) => {
    //     // let posts = { props };
    //     const { posts } = this.props.postData;
    //     this.setState({ posts });
    // }

    handleAddComment = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitComment = () => {
        const { postData } = this.state;
        console.log(postData);
        if(this.state.newComment !== ""){
            postData.comments.push({
                username: 'Username',
                text: this.state.newComment
            })
        };
        this.setState({ postData, newComment: '' })
    }

    render() {
        return (
            <Card className="post-container">
                {/* {[...this.props]} */}
                {/* {[...this.state].map((post, index) => (
                <div>{post[index].username}</div>
            ))} */}
                <CardTitle className="post-header">
                    <img style={{width: '10%'}} className="img-fluid" src={logo} />
                    {[...this.props.postData.username]}
                </CardTitle>
                {/* <CardBody> */}
                    <img className="img-fluid" src={`${this.props.postData.imageUrl}`} />
                {/* </CardBody> */}
                <div className="likes-container">
                    <img style={{width: '30%', height: '10%'}} src={logo} />
                    <img style={{width: '30%', height: '10%'}} src={logo} />
                    <b style={{marginTop: '5%'}}>{`${this.props.postData.likes} likes`}</b>
                </div>
                <div className="comment-container">
                {this.props.postData.comments.map((comment, index) =>
                    <CommentSection key={index} commentData={comment}
                    />)}
                    <p>{this.props.postData.timestamp}</p>
                    <input
                    type="text"
                    name="newComment"
                    value={this.state.newComment}
                    placeholder="Add comment..."
                    onChange={this.handleAddComment}
                    />
                    <button onClick={this.handleSubmitComment}>Submit</button>
                </div>
            </Card>
        )
    }
}

export default PostContainer;
import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

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
        console.log(this.state)
        // console.log(this.state.newComment)
        // console.log(this.props.postData.comments,'newcomment changed')
    }

    handleSubmitComment = () => {
        const { postData } = this.state;
        console.log(postData);
        if(this.state.newComment !== ""){
            postData.comments.push({
                username: 'Insert username here',
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
                <CardTitle>
                    {[...this.props.postData.username]}
                    <p>{this.props.postData.timestamp}</p>
                </CardTitle>
                {/* <CardBody> */}
                    <img className="img-fluid" src={`${this.props.postData.imageUrl}`} />
                {/* </CardBody> */}
                <div>
                    {this.props.postData.likes}
                </div>
                <div className="comment-container">
                {this.props.postData.comments.map((comment, index) =>
                    <CommentSection key={index} commentData={comment}
                    />)}
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
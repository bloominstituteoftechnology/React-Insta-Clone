import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

class PostContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    //     this.state = {
    //         posts: []
    //     };
    // }

    // componentDidMount = (props) => {
    //     // let posts = { props };
    //     const { posts } = this.props.postData;
    //     this.setState({ posts });
    // }

    render() {
        console.log('this is 2 ', this.props);
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
                {this.props.postData.comments.map((comment, index) =>
                    <CommentSection key={index} commentData={comment}
                    />)}
            </Card>
        )
    }
}

export default PostContainer;
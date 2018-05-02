import React, { Component } from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("props", this.props)
        return (
            <div className="container socialCard">
            <div className="row">
                <div className="col-12 d-flex">
                    <BodyHeader username={this.props.data.username} url={this.props.data.thumbnailUrl} />
                </div>
                <div className="well col-12">
                    <Well url={this.props.data.imageUrl} />
                    <CommentSection time={this.props.data.timestamp} comments={this.props.data.comments} likes={this.props.data.likes} />
                </div>
            </div>
        </div>
        );
    }
}

const BodyHeader = props => {
    return (
        <div className="d-flex">
            <img className="thumbnail rounded-circle" src={props.url} alt="User Thumbnail" />
            <p className="username">{props.username}</p>
        </div>
    );
};

const Well = props => {
    return (
        <div>
            <img className="img-fluid main-img" src={props.url} alt="Well" />
            <div className="icons d-flex">
                <i class="far fa-comment fa-2x"></i>
                <i class="far fa-heart fa-2x"></i>
            </div>
        </div>
    );
}

export default PostContainer;
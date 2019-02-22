import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import LikesSection from './LikesSection';

class PostContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.postProp.likes
      };
    }
    incrementLike = () => {
      let likes = this.state.likes + 1;
      this.setState({ likes });
    };
    render() {
        return (
            <Container className="custom-container" >
                <Row noGutters={true} className="flex-start">
                    <Col sm={1}>
                        <img className="profile-img" alt="profilepic" src={this.props.postProp.thumbnailUrl} />
                    </Col>
                    <Col sm={1}>
                        {this.props.postProp.username}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={this.props.postProp.imageUrl} alt="instapost" className="post-img" />
                    </Col>
                </Row>

                <LikesSection incrementLike={this.incrementLike}likes={this.state.likes} />
                <CommentSection comments={this.props.postProp.comments} />
            </Container>

        );
    };
}

export default PostContainer;
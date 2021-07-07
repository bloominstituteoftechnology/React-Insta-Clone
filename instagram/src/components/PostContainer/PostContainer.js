import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { Container, Row, Col } from 'reactstrap';
import './postContainer.css';




class PostContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: 0,
        toggled: false,
        comments: []
      };
    }
  
    componentDidMount() {
      this.setState({
        likes: this.props.postData.likes,
        comment: this.props.postData.comments
      });
    }
  
    increment = () => {
      if (!this.state.toggled) {
        this.setState(prevState => {
          return {
            likes: prevState.likes + 1,
            toggled: !prevState.toggled
          };
        });
      } else {
        this.setState(prevState => {
          return {
            likes: prevState.likes - 1,
            toggled: !prevState.toggled
          };
        });
      }
    };
  
    render() {
      return (
        <Container className={"maincontainer"}>
          <div className={"user"}>
            <h1 className={"posttitle"}>
              <img className={"avatar"} src={this.props.postData.thumbnailUrl} />{" "}
              {this.props.postData.username}
              {this.props.value}
            </h1>
          </div>
  
          <img src={this.props.postData.imageUrl} />
          <div className={"posticons"}>
            <i class="far fa-heart" onClick={this.increment} likes={"one"} />{" "}
            <i class="far fa-comment" />
          </div>
          <div className={"likes"}>{this.state.likes} likes</div>
  
          <CommentSection
            comments={this.props.postData.comments}
            timestamp={this.props.postData.timestamp}
          />
        </Container>
      );
    }
  }
  
  export default PostContainer;
  

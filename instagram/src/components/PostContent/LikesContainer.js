import React from "react";
import styled from 'styled-components';
import './PostContent.css';
 const Container = styled.div`
  width: 8rem;
  display:flex;
  justify-content: space-between;
`;
 const I = styled.i`
font-size: 3rem;
`;
 const Button = styled.button`
border: none;
    background: none;
    color: grey;
    cursor: pointer;
`;
 const Likes = styled.div`
margin-top: 1rem;
`;
class LikesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    };
  }
   componentDidMount() {
    const likes = JSON.parse(localStorage.getItem("likes"));
    if (likes) {
      this.setState({ likes: likes });
    }
  }
   likeClick = () => {
    let newLike = this.state.likes + 1;
    this.setState({
      likes: newLike
    });
    localStorage.setItem("likes", JSON.stringify(newLike));
  };
   render() {
    return (
      <React.Fragment>
        <Container>
          <Button onClick={this.likeClick}>
            <I className="far fa-heart " />
          </Button>
          <Button>
            <I className="far fa-comment" />
          </Button>
        </Container>
        <Likes>
          <p>{this.state.likes}</p>
        </Likes>
      </React.Fragment>
    );
  }
}
 export default LikesContainer;
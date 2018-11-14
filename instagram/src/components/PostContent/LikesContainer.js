import React from "react";
import './PostContent.css';

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
        <div className="buttons">
          <button className="heart" onClick={this.likeClick}>
            <i className="far fa-heart icon" />
          </button>
          <a href="">
            <i className="far fa-comment" />
          </a>
        </div>
        <div  className="likes">
          <p>{this.state.likes}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default LikesContainer;

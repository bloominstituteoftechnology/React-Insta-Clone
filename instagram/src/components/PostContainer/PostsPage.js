import React from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      newSearch: "",
      filtered: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ postData: dummyData });
    }, 500);
  }

  startSearch = event => {
    event.preventDefault();
    let newData = dummyData;
    let filteredArr = newData.filter(
      post => post.username.includes(this.state.newSearch)
    );
    if (filteredArr.length) {
      this.setState({
        postData: filteredArr,
        newSearch: "",
        filtered: true
      });
    } else if (this.state.filtered === true) {
      this.setState({
        postData: dummyData,
        newSearch: "",
        filtered: false
      });
    } else {
      alert("Sorry, but we couldn't find any matches with that username");
      this.setState({
        newSearch: ""
      });
    }
  };

  changeHandler = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <div className="PostsPage">
        {!this.state.postData.length ? (
          <h2>Loading, please wait...</h2>
        ) : (
          <div>
            <SearchBar
              changeHandler={this.changeHandler}
              startSearch={this.startSearch}
              value={this.state.newSearch}
              filtered={this.state.filtered ? "filtered" : "not-filtered"}
            />
            <div className="post-container-list">
              {this.state.postData.map(user => {
                return <PostContainer key={user.timestamp} userData={user} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PostsPage;
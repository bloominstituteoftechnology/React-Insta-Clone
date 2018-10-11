import React from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: ""
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  render() {
    let filteredData = this.state.dummyData.filter(
      data => data.username.indexOf(this.state.search) !== -1
    );
    return (
      <div className="App">
        <SearchBar
          search={this.state.search}
          onInputChange={this.onInputChange}
          handleLogOut={this.handleLogOut}
        />
        {filteredData.map((data, i) => (
          <PostContainer key={i} data={data} index={i} />
        ))}
      </div>
    );
  }
}

export default PostsPage;

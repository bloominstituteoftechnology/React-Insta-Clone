import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import PostContainer from "./PostContainer/PostContainer";
import dummyData from "../dummy-data";
import "../App.css";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchFocus: false,
      searchInput: ""
    };
  }

  searchFocusHandler = () => {
    this.setState({ searchFocus: true });
  };

  searchBlur = e => {
    this.setState({ data:dummyData, searchFocus: false, searchInput: "" });
    
  };

  searchHandler = e => {
    e.preventDefault()
    let input = e.target.value;
    if (!input){
      this.setState({data:dummyData, searchInput:''})
    }else{
      let cloned = Object.assign([],dummyData);
      let re = new RegExp(input,'i')
      cloned= cloned.filter(post => re.test(post.username))
      this.setState({searchInput:input, data:cloned})
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ data: dummyData }), 800);
  }

  render() {
    return (
      <div>
        <header>
          <SearchBar
            searchFocusHandler={this.searchFocusHandler}
            searchFocus={this.state.searchFocus}
            searchBlur={this.searchBlur}
            searchHandler={this.searchHandler}
            searchInput={this.state.searchInput}
          />
        </header>
        <div className="container">
          <PostContainer data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default PostsPage;

import React, { Component } from "react";
import "../../App.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.state = {
      inputText: "",
      data: this.props.data
    };
  }

  changeHandler(event) {
    event.preventDefault();
    this.setState({
      inputText: event.target.value
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        inputText: "",
        data: this.props.data
      });
    }, 200);
  }

  submitHandler(event) {
    event.preventDefault();
    const searchText = this.state.inputText;
    this.setState({
      inputText: "",
      data: this.props.data
    });
    this.setState({
      inputText: "",
      data: this.state.data.filter(data => {
        return data.username === searchText;
      })
    });
  }

  refreshPage() {
    this.setState({
      inputText: "",
      data: this.props.data
    })
  }

  render() {
    return (
      <div className="wholePage">
        <SearchBar
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          refreshPage={this.refreshPage}
          inputText={this.state.inputText}
        />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default PostsPage;

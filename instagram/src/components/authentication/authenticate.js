/* eslint-disable default-case */
/* eslint-disable no-useless-constructor */
import React from "react";
import dummyData from "../../dummy-data";

export const authenticate = App => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        inputText: "",
        inputUsername: "",
        inputPassword: "",
        currentUser: "",
        inputSearch: "",
        searchData: [],
        addLike: []
      };
    }
    componentDidMount() {
      const data = JSON.parse(localStorage.getItem("data")) || dummyData;
      const currentUser = JSON.parse(localStorage.getItem("currentUser")) || "";
      this.setState(
        {
          data: [...data],
          searchData: [...data],
          currentUser,
          addLike: Array(data.length).fill(false)
        },
        () => {
          localStorage.setItem("data", JSON.stringify(this.state.data));

          localStorage.setItem(
            "currentUser",
            JSON.stringify(this.state.currentUser)
          );
        }
      );
    }

    handleSubmit = e => {
      switch (e.target.name) {
        case "loginForm":
          this.loginUser();
      }
    };

    handleChange = e => {
      if (e.target.name === "inputSearch") {
        this.searchPosts(e.target.value);
      } else {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    };

    loginUser = () => {
      this.setState({
        currentUser: this.state.inputUsername
      });
    };

    addComment = (e, username) => {
      e.preventDefault();

      let searchData = this.state.searchData.map(post => {
        if (post.username === username) {
          post.comments.push({
            username: username,
            text: this.state.inputText
          });
        }
        return post;
      });

      this.setState({ searchData, inputText: "" });
    };

    searchPosts = query => {
      const results = query
        ? this.state.data.filter(post => post.username.startsWith(query))
        : [...this.state.data];

      this.setState({
        searchData: results,
        inputSearch: query
      });
    };

    handleClick = e => {
      switch (e.target.dataset.button) {
        case "toggleHeart":
          this.toggleHeart(e);
          break;
      }
    };

    toggleHeart = e => {
      const index = this.state.data.findIndex(
        post => post.username === e.target.dataset.username
      );

      const addLike = [...this.state.addLike];
      addLike.splice(index, 1, !addLike[index]);
      this.setState({
        addLike
      });
    };

    render() {
      return !this.state.currentUser ? (
        <Login
          inputUsername={this.state.inputUsername}
          inputPassword={this.state.inputPassword}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      ) : (
        <App
          addComment={this.addComment}
          inputUsername={this.state.inputUsername}
          inputPassword={this.state.inputPassword}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state.data}
          currentUser={this.state.currentUser}
          inputText={this.state.inputText}
          inputSearch={this.state.inputSearch}
          searchData={this.state.searchData}
          addLike={this.state.addLike}
          handleClick={this.handleClick}
        />
      );
    }
  };

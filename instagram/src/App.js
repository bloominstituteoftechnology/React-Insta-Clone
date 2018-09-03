import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  // on mounting the component load in the state data
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  // TODO: searchHandler method
  searchHandler = event => {};

  render() {
    return (
      /*  TODO: setup some logic for day 1

          Tasks (Day I)
          ------------
          There are three major container components that you'll need to implement for this project: the Search Bar, the Post Container, and the Comment Section.

          At the end of Day I there will be a single instance of the Search Bar being rendered at the top of the page, 
          as well as a Post Container and a Comment Section for every piece of mock data in the dummy-data.js file.

          The root App component of your application should import the dummy data from the dummy-data.js file with 
          import dummyData from './dummy-data'; and iterate over said data, passing each individual object as a prop 
          to an instance of PostContainer.

          Each PostContainer component will then pass the array of comments on each post object as a prop to an instance 
          of the CommentSection component.

          The CommentSection component will receive the array of comments as props and render a Comment component with the 
          username of the poster as well as the post's text. Additionally, there should be an input box that allows users 
          to submit a new comment for any post. We'll work on posting new comments tomorrow.

          Be sure to check the Types of the data you are passing around as props in the components that will be using props 
          to present data as DOM elements. This should be linked to your Comment component that Comment Section will render 
          and potentially to your Post component that Post Container will render.

          You are free to leverage the Bootstrap library for this project for the purposes of theming and styling. I recommend 
          the awesome reactstrap library, which is a library of Bootstrap components that have been implemented using React, 
          so they're really easy to just drop straight into React projects.

          In addition to Bootstrap for theming, you'll want to add your own styles via CSS. To keep things organized, have the 
          CSS file that corresponds with a component live in the same directory as the component file.

      */
      <div className="App">
        <div className="wrapper">
          <header>
            <div className="instaclone-logo">
              <i className="fab fa-instagram" />
              <p>Instagram</p>
            </div>
            <SearchBar searchHandler={this.searchHandler} />
            <div className="social-icons">
              <i className="far fa-compass" />
              <i className="far fa-heart" />
              <i className="far fa-user" />
            </div>
            <PostContainer data={this.state.posts} />
          </header>
        </div>
      </div>
    );
  }
}

export default App;

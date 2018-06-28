import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
// import Authenticate from './components/Authentication/Authenticate';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      originalPostData: [],
      searchField: ""
    };
  }

  searchUsername = (event) => {
    event.preventDefault();
    const postData = this.state.originalPostData.slice();
    const filteredPostData = postData.filter(item => item.username === this.state.searchField);
    this.setState({postData: filteredPostData, searchField: ""})
  }

  searchFieldHandler = event => {
    console.log(event.target.value);
    this.setState({searchField:event.target.value})
  }

  componentDidMount() {
    console.log("App DidMount called");
    this.setState({
      postData: dummyData,
      originalPostData: dummyData
    })
  }  // "Good place to fetch your data and set your state accordingly."

  // LIFECYLE MOUNTING: constructor invoked ---> render called ---> add stuff to DOM ---> componentDidMount invoked (in case there's any asynchronous data we need to handle) 
  // note that componentDidUpdate() is another method called upon after render 
  // Summarizing: constructor---> render--->DidMount--->render--->DidUpdate


  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Prev Props:", prevProps);
  //   console.log("Prev State:", prevState);
  // }



  render() {
    return (
      <div className="App">
        <PostsPage 
          searchFieldHandler = {this.searchFieldHandler}
          activeValue = {this.state.searchField}
          searchUsername = {this.searchUsername}
          postData = {this.state.postData}
        />       
      </div>
    );
  }
}

////// ************************************************************************* /////
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       postData: [],
//       originalPostData: [],
//       searchField: ""
//     };
//   }

//   searchUsername = (event) => {
//     event.preventDefault();
//     const postData = this.state.originalPostData.slice();
//     const filteredPostData = postData.filter(item => item.username === this.state.searchField);
//     this.setState({postData: filteredPostData, searchField: ""})
//   }

//   searchFieldHandler = event => {
//     console.log(event.target.value);
//     this.setState({searchField:event.target.value})
//   }

//   componentDidMount() {
//     console.log("App DidMount called");
//     this.setState({
//       postData: dummyData,
//       originalPostData: dummyData
//     })
//   }  // "Good place to fetch your data and set your state accordingly."

//   // LIFECYLE MOUNTING: constructor invoked ---> render called ---> add stuff to DOM ---> componentDidMount invoked (in case there's any asynchronous data we need to handle) 
//   // note that componentDidUpdate() is another method called upon after render 
//   // Summarizing: constructor---> render--->DidMount--->render--->DidUpdate


//   // componentDidUpdate(prevProps, prevState) {
//   //   console.log("Prev Props:", prevProps);
//   //   console.log("Prev State:", prevState);
//   // }


//   render() {
//     return (
//       <div className="App">
//         <PostsPage 
//           searchFieldHandler = {this.searchFieldHandler}
//           activeValue = {this.state.searchField}
//           searchUsername = {this.searchUsername}
//           postData = {this.state.postData}
//         />       
//       </div>
//     );
//   }
// }

export default App;

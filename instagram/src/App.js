import React, { Component } from 'react';
import './App.css';
import Authenticate from './Authentication/Authentication';
import PostPage from './Components/PostPage';
import Login from './Components/Login';

// const higherOrderComponent = (WrappedComponent) => class extends Component {
//   constructor(props) {
//     super();
//     this.state = {

//     }
//   }

//   render() {
//     return (
//       <div className="container">
//         <PostPage />
//       </div>
//     )
//   }
// }

// const HOC = higherOrderComponent(PostPage);

class App extends Component {
  render() {
    return <PostPage />
  }
}

export default Authenticate(App);

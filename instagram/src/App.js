import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostContainer from "./PostContainer/PostContainer";
import SearchBarContainer from "./SearchBar/SearchBarContainer";
import dummyData from "./dummy-data";
import PostPage from "./PostContainer/PostPage";
import Authenticate from "./Authentication/Authenticate";
import Login from "./Login/Login";
// class App extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       loggedIn: false
//     };
//   }
//   loginEvent=()=>{
//     this.setState({loggedIn:true})
//   }

//   render() {
//     if(this.state.loggedIn===false)
//       return(
//         <div className="App">
//           <ShowConditionally loggedIn={this.state.loggedIn} />
//           <button onClick={this.loginEvent}>Log In</button>
//       </div>
//       )
//     else
//       return (
//           <div className="App">
//             <ShowConditionally loggedIn={this.state.loggedIn} />

//         </div>
//     );
//   }
// }
// const ShowConditionally = authenticate(PostPage)(Login);

// export default App;
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default Authenticate(App);

import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar"

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <SearchBar className='search-bar-container'/>
        <div className='post-container'>

        </div>
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className='App'>
//         <div className="search-bar">
//           <div className="logo-imgages">
//             <img src={logo} alt="Instagram-Logo" />
//             <img src={title} alt="Instagram-Title" />
//           </div>
//           <input placeholder="search" className="search" />
//           <div className="icons">
//             <img src={compass} alt='compass-icon' />
//             <img src={heart} alt='heart-icon' />
//             <img src={person} alt='person-icon' />
//           </div>
//         </div>
//         <div className='post-container'>

//         </div>
//       </div>
//     );
//   }
// }


export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'


class App extends React.Component {

  constructor(){
    super()

    this.state = {

    }
  }
  render() {
    return (
      <>
      {dummyData.map(item => <div key={item.timestamp}>
      {item.username}


      </div>
      
      
      )}
      <SearchBar />
      <PostContainer dummyData={dummyData} />
      </>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}


export default App;

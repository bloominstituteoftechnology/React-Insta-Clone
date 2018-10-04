import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';


class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <SearchBar/>
      </div>
    );
  }
}

export default App;

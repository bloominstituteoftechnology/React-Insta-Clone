import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/Search';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
      </div>
    )
  }
}

export default App;

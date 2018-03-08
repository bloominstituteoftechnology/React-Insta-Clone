import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div className="">
        <nav>
          <SearchBar />
        </nav>
{/* 
        <Button bsStyle="warning">Warning</Button>

        <Button bsStyle="success">Success</Button>

 */}

      </div>
    );
  }
}

export default App;

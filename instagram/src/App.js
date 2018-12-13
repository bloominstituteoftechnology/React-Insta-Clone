import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./dummy-data"
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer"
import SearchBar from "./components/SearchBar/SearchBar"
import PropTypes  from "prop-types";

class App extends Component {
    constructor() {
        super();
        this.state={


        }
    }
    render() {
      return (
        <div className="App">
        <header className="App-header">
         <SearchBar />
        </header>
            {
                dummyData.map(data =>{
                    return <PostContainer key={data.id} data={data}/>
                })
            }


        </div>
    );
  }
}

export default App;

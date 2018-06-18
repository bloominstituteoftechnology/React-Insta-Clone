import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
    constructor() {
        super();

        this.state = {
            dummydata: dummyData
        }
    }
    render() {
        return (
            <div className="App">
                <PostContainer data={this.state.dummydata}/>
            </div>
        );
    }
}

export default App;

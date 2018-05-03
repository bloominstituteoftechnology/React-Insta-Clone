import React, {Component} from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import data from './dummy-data.js';

class App extends Component {
    constructor() {
        this.state = {
            data: data
        }
    }

    componentDidMount() {
        this.setState({data: data});
    }

    render() {
        return (
            <div className="App">
                <SearchBar/>
                <PostContainer/>
            </div>
        );
    }
}

export default App;

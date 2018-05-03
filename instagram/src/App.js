import React, {Component} from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {

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

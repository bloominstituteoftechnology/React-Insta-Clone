import React , { Component } from 'react' ;
import './App.css' ;
import PostsPage from './components/PostContainer/PostsPage' ;
import Authenticate from './components/Authentication/Authenticate' ;
import SearchBar from './components/SearchBar/SearchBar' ;

class App extends Component {
    constructor() {
        super() ;
        this.state = {} ;
    }
    render() {
        return(
            <div className="App">
                <SearchBar />
                <PostsPage />
            </div>
        )
    }
}
    export default Authenticate(App);

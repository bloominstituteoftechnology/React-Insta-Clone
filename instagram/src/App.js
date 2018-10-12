import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar';
import PostsPage from './components/PostsPage';
import Login from './components/Login';
import Authenticate from './authentication/Authenticate';

class App extends Component {
    state = { /*state is a special object that re-renders the component every time a value held within state changes changes*/
        posts: dummyData, /*Establishing posts as a property of state*/
        originalPosts: dummyData,
        newComment: '' /*Holds the new comment as it's created in state*/
    };

    /*Search bar functionality*/
    handleSearchInput = event => { /*Handle text input into the search bar*/
        this.setState({ handleSearch: event.target.value }, () => { /*Creates a new state property that is equal to what is typed in the search bar*/
            const newArr = this.state.originalPosts.filter((post) => { /*Filtering through the posts array*/
                return post.username.includes(this.state.handleSearch) /*To only return posts whose username matches the term searched*/
            });
            this.setState({ posts: newArr }, () => {console.log(this.state.handleSearch, this.state.posts, newArr)}); /*Setting posts in the state to equal the new array created from the filtered search results*/
        });
    };

    /*Login functionality*/
    handleLogin = event => { /*Handle submission of login form*/
        event.preventDefault(); /*Prevent form from trying to submit using default functionality*/
        localStorage.setItem("username", event.target.elements[0].value); /*Save username in browser localstorage*/
        window.location.reload(); /*Refresh page*/
    };

    /*Rendering the app*/
    render() {
        return (
            <div className="App">
                <Login login={this.handleLogin} />
                <SearchBar handleSearchInput={this.handleSearchInput} /> {/*Inserted search bar component, passes handling for search input*/}
                <PostsPage posts={this.state.posts}/>
            </div>
        );
    }
}

Authenticate(App);

export default App;
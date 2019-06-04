import React, { Component } from 'react';

import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
    constructor() {
        super();
        this.state= {

        }
    }

    logout=()=>{

        console.log("Logout called")
        localStorage.clear();
        window.location.reload();
//we did setstate so that post page is rerender and user bis given with login password page.
    }

    render() {
        return (
            <div className="App">
                <PostsPage logout={this.logout}/>
            </div>
        );
    }
}

export default Authenticate(App);

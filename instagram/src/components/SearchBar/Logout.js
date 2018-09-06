import React, { Component } from 'react';
import {Button} from 'mdbreact';
import './SearchBar.css'

// Logs the user out and refreshes the page
class Logout extends Component {

    // Refreshes the page and deletes the localstorage
    logout = (e) => {
        this.props.forceUpd();
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.logout}>Logout</Button>
            </div>
        )
    }
    
}

export default Logout;
import React, { Component } from 'react';
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
                <input type="button" value="Logout" onClick={this.logout} />
            </div>
        )
    }
    
}

export default Logout;
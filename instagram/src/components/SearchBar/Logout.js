import React, { Component } from 'react';
import './SearchBar.css'

class Logout extends Component {

    logout = (e) => {
        localStorage.removeItem('InstaLogged');
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
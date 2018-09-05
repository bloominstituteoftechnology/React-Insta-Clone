import React, { Component } from 'react';
import './SearchBar.css'

class Logout extends Component {
    constructor(props) {
        super(props);
    }

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
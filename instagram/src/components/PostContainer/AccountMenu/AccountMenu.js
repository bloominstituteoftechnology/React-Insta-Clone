import React, { Component } from 'react';
import './accountMenu.scss';

export default class AccountMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className='accMenu'
                style={{ display: this.props.account === false ? 'none' : 'flex' }}
            ><span>{JSON.parse(localStorage.getItem('user')).username}</span>
                <button onClick={() => localStorage.removeItem('user') & window.location.reload()}>Logout</button>
            </div>
        )
    }
}

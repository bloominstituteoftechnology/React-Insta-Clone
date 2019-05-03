import React from 'react';
import './accountMenu.scss';

const AccountMenu = props => {
    return (
        <div
            className='accMenu'
            style={{ display: props.account === false ? 'none' : 'flex' }}
        >
            <span>{JSON.parse(localStorage.getItem('user')).username}</span>
            <button onClick={() => localStorage.removeItem('user') & window.location.reload()}>Logout</button>
        </div>
    )
}

export default AccountMenu;

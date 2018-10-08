import React from 'react';

let Logo = props => {
    return (
        <div className="logoBox">
            <img alt="logo" className="logo" src={require('./assets/logo.png')}/>
            <img alt="wordmark" className="wordmark" src={require('./assets/wordmark.svg')} />
        </div>
    )
}

export default Logo;
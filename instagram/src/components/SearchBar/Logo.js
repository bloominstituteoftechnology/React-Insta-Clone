import React from 'react';

let Logo = props => {
    return (
        <div className="logoBox">
            <img alt="logo" className="logo" src={require('./logo.png')}/>
             <img alt="wordmark" className="wordmark" src={require('./logo2.png')} />
        </div>
    )
}

export default Logo;
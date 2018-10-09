import React from 'react';

let Account = props => {
    return (
        <div className='icons'>
            <img alt="Discover" className="compass" src={require('./compass.png')}/>
            <img alt="Liked" className="heart" src={require('./heart2.png')} />
            <img alt="Account" className="person" src={require('./person.png')} />
        </div>
    )
}

export default Account;
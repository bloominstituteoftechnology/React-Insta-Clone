import React from 'react';

let AccountManagement = () => {
    return (
        <div className='icons'>
            <img alt="Discover" className="compass" src={require('./assets/compass.png')}/>
            <img alt="Liked" className="heart" src={require('./assets/heart.png')} />
            <img alt="Account" className="person" src={require('./assets/person.png')} />
        </div>
    )
}

export default AccountManagement;
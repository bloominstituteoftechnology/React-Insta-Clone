import React from 'react';
import './LogoContainer.css';


const LogoContainer = props => {
    return(
         <div className='logo-container'>
             <div className='logo-divider'><img className='logo-logo' src={require('../../static/img/logo.png')}></img></div>
             <div><img className='logo-lettering' src={require('../../static/img/lettering.png')}></img></div>
         </div>
    )
}

export default LogoContainer
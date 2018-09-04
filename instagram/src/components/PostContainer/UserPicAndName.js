import React from 'react';
import logo from './philzcoffee-logo.jpg';

const UserPicAndName = () => {
  return ( 
    <div className="userpic-n-name">

      <img src={logo} className="philzcoffee-logo" alt="philzcoffee-logo" />
      <div className="user-name">philzcoffee</div>

    </div>
   );
}
 
export default UserPicAndName;
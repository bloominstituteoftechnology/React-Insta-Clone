import React from 'react';


const Authenticate = PassedComponent => OtherComponent => props => {
    if (props.username) {
      return <PassedComponent {...props} />;
    }
  
    return <OtherComponent {...props} />;
  };

  export default Authenticate;
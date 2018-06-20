import React from 'react';

const Authenticate = WrapperComponent =>
  class extends React.Component {
    render() { 
      return <WrapperComponent />
    }
  }

  export default Authenticate
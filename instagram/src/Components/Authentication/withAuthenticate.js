import React from 'react';

const withAuthenticate = App => 
  class extends React.Component {
    render() {
      return <App />;
    }
  };

export default withAuthenticate;

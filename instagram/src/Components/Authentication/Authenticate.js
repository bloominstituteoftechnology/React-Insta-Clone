import React from 'react';

const authenticate = PassedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return <PassedComponent />;
    }
  };

export default authenticate;

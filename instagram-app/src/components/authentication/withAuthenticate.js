import React from 'react';

const withAuthenticate = (WrappedComponent) => class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
  
    render() {
      return (
        <div className="container">
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }

  export default withAuthenticate;
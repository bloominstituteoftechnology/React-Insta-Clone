import React from 'react';

const withAuthenticate = (WrappedComponent, Login)  => class extends React.Component {
    render() {
      let viewComponent;
      if (localStorage.getItem("User")) {
        viewComponent = <WrappedComponent {...this.props}/>
      } else {
        viewComponent = <Login />
      }
      return (
        <div className="container">
          {viewComponent}
        </div>
      )
    }
  }

  export default withAuthenticate;
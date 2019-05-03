import React from 'react'

// const withAuthenticate = (Component) => {
//     class extends React.Component {
//       constructor(){
//         super();
//       }
//         render() {
//           return <Component />;
//         }
//       }}

const withAuthenticate = Component =>
  class extends React.Component {
    render() {
      return <Component />;
    }
  };

export default withAuthenticate;
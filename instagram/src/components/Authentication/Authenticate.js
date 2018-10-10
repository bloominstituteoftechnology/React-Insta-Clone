/* - This component should be able to 
take in a component as an argument, and it will return a `class` component.
  - Head over to App.js and `import` in our new 
  `Authenticate` Higher Order Component and pass in `App`.
  */
 import React from 'react';

 const Authenticate = App => {
  return class Authenticate extends React.Component {
    constructor(props) {
      super(props) {
        this.state =''
      }
    }
     render() {
       return <App />;
     }
   };
   //Inside render method, you'll want to return the Component that gets passed into it.

export default Authenticate;


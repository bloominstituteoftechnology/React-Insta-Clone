/* - This component should be able to 
take in a component as an argument, and it will return a `class` component.
  - Head over to App.js and `import` in our new 
  `Authenticate` Higher Order Component and pass in `App`.
  send App to Authenticate and it will return of of 
  two different results - render <PostsPage /> || render <LoginPage />
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
      if("username" in localStorage){
        return <App></App>;
     } else {
         return <Login></Login>
     }
   };
   //Inside render method, you'll want to return the Component that gets passed into it.

export default Login(Authenticate);


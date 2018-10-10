import React from 'react';

const Authenticate = PassedComponent =>
    class extends React.Component {
        render() {
            return <PassedComponent />;
        }
    };

export default Authenticate;

//Take in a component as an argument, return a class component.
//In render(), return component that gets passed into it.

//************** to do
// on state, need loggedIn boolean
// on componentDidMount, need to check localStorage to see if username exists
// in render(), check if user is logged in
// if user is logged in, return <App /> and if not return <LoginPage />
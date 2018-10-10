import React, { Component } from 'react';


const Authenticate = PassedComponent => 
    class Authenticater extends Component {
        

        render() {
            return (
                    <PassedComponent />
            )
        }
    }


export default Authenticate;
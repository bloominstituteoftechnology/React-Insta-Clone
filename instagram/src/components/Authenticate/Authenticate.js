import React from 'react';
import LogIn from '../LogIn/Login.js';

const Authenticate = App => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {

            }
        }

        retrieveLocalStorage = (name) => {
            return localStorage.getItem('name', name)
        }

        render(){
            if(this.retrieveLocalStorage('Erik')){
                return <App />
            } else {
                return <LogIn />
            }
        }
    }

}
export default Authenticate;
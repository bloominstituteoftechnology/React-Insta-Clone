import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                isLoggedIn: false,
                userName: '',
                userInput: '',
              }
        }

        componentDidMount() {
            if(localStorage.getItem('userName') !== null && localStorage.getItem('userName') !== undefined){
              this.setState({
                userName: localStorage.getItem('userName'),
                isLoggedIn: true
              })
            }
          }

        logIn = (event) => {
        event.preventDefault();
        if(this.state.userInput === ''){
            console.log('name input empty')
        }
        else{
            this.setState({ userName: this.state.userInput, isLoggedIn: true, userInput: ''});
            localStorage.setItem('userName',this.state.userInput);
        }
        }

        logOut = () => {
            this.setState({ userName: '', isLoggedIn: false});
            localStorage.removeItem('userName');
          }
        
        userInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        }

        render() {
            if(!this.state.isLoggedIn){
                return <Login logIn={this.logIn} 
                userInputChange={this.userInputChange} userInput={this.state.userInput} />
            }
            else {
                return <App logout={this.logOut} userName={this.state.userName} />
            }  
        }
    };

export default Authenticate;

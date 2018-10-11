import React from 'react';
import LoginPage from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/components/Login/loginpage';
import SearchBar from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/components/SearchBar/searchbar'

import { LoginContainer } from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/styles'

// import App from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/App'

const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        } 
        logIn(event) {
            event.preventDefault();
        }
        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({ loggedIn: false });
            } else {
                this.setState({ loggedIn: true });
            } 
        }      
        render() { 
            if (this.state.loggedIn) return <App />;
            return (    
                <LoginContainer >
                    <SearchBar />
                    <LoginPage content={this.state} logIn={this.logIn} />
                </LoginContainer>
            );
        }
    };

export default Authenticate;    
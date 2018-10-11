import React from 'react';
import SearchBar from './components/SearchBar/searchBar';
import LoginPage from './components/Login/loginpage';

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
            console.log(this.state.loggedIn)
        }
        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({ loggedIn: false });
            } else {
                this.setState({ loggedIn: true });
            } 
        }      
        render() { 
            if (this.state.loggedIn){ return <App />};
            return (    
                <div className='login-container'>
                    <SearchBar />
                    <LoginPage content={this.state} logIn={this.logIn} />
                </div>
            );
        }
    };

export default Authenticate;
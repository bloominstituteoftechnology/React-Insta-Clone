import React from 'react';


const Authenticate = (App, Login) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false,
                username: '',
            };

        }
        componentDidMount() {
            this.setState( {
                loggedIn: localStorage.getItem('loggedIn'),
                username: localStorage.getItem('username'),
            });
        }

        updateLocal() {
            localStorage.setItem('loggedIn', this.state.loggedIn);
            localStorage.setItem('username', this.state.username)
        }

        login = event => {
            event.preventDefault();
            if (this.state.username) {
                this.setState({
                    loggedIn: true
                }, this.updateLocal)
            }
        }

        updateUsername = event => {
            this.setState({
                username: event.target.value,
            })
        }

        render() {
            if (this.state.loggedIn) {
                return(
                    <div className='authenticate'>
                        <App />
                    </div>
                )
            }
            else {
                return (
                    <div className='authenticate'>
                        <Login loginUsernameHandler={this.updateUsername} loginHandler={this.login} />
                    </div>
                )
            }

        }
    }
}

export default Authenticate;
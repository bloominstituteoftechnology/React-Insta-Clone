import React from 'react';
import logo from '../../assets/instagram-logo.png';

import './Login.css';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            loginDivClass: 'show',
            loginSectionClass: ['show'],
            registerSectionClass: ['display-none'],
            message: 'Error goes here.',
            messageClass: '',
            timeoutInterval: 2000,
        };
    }

    componentDidMount() {
        // if localStorage does NOT have the usernames and passwords object stored, make a new one
        if (!localStorage.getItem('usernamesAndPasswords')) {
            // create 3 username and password combinations in an object
            const usernamesAndPasswords = {
                'Alice': 'AlicePass',
                'Bob': 'BobPass',
                'Carol': 'CarolPass',
            }

            // store the username and password object in local storage
            localStorage.setItem('usernamesAndPasswords', JSON.stringify(usernamesAndPasswords));
        }
    }

    handleLogIn = (e) => {
        e.preventDefault();
        // get the usernames and passwords from localStorage
        const usernamesAndPasswords = JSON.parse(localStorage.getItem('usernamesAndPasswords'));

        // check to see if the username that was entered matches a username in localStorage
        for (let key in usernamesAndPasswords) {
            if (e.target[0].value === key) {
                // if usernames match, check to see if the password for that username matches as well
                if (e.target[1].value === usernamesAndPasswords[key]) {
                    // if passwords match as well, then
                    // give loggedIn the value of the username (key) that will get logged in
                    localStorage.setItem('loggedIn', key);

                    // animate fade out for the log in page and reload the window to
                    // go to PostsPage component as the newly logged in user
                    return this.setState({
                        loginDivClass: 'hide',
                    }, () => {
                        setTimeout(() => window.location.reload(), 1500);
                    });
                }
            }
        }

        // else if user or password doesn't match with those stored in localStorage,
        // display the wrong user/pass message.
        let newState = this.state;
        
        newState.message = 'Wrong username / password. Try again or register a new user.';
        newState.messageClass = 'show';

        return this.setState(newState, () => {
            setTimeout(() => {
                newState.messageClass = 'hide';

                this.setState(newState);
            }, this.state.timeoutInterval);
        });
    }

    handleRegister = (e) => {
        e.preventDefault();

        // hide the log in section and display the register section so the user
        // can register a new username and password
        return this.setState({
            loginSectionClass: ['hide', 'display-none'],
            registerSectionClass: ['show'],
        })
    }

    handleBackToLogIn = (e) => {
        e.preventDefault();

        // hide the register section and display the log in section so the user
        // can log in with their username and password
        return this.setState({
            loginSectionClass: ['show'],
            registerSectionClass: ['hide', 'display-none'],
        })
    }

    handleNewUser = (e) => {
        e.preventDefault();
        const usernamesAndPasswords = JSON.parse(localStorage.getItem('usernamesAndPasswords'));

        // if username input is left blank, display the enter username message
        if (e.target[0].value === '') {
            let newState = this.state;

            newState.message = 'Please enter a username.';
            newState.messageClass = 'show';

            return this.setState(newState, () => {
                setTimeout(() => {
                    newState.messageClass = 'hide';

                    this.setState(newState);
                }, this.state.timeoutInterval);
            });
        // else if password input is left blank, display the enter password message
        } else if (e.target[1].value === '') {
            let newState = this.state;

            newState.message = 'Please enter a password.';
            newState.messageClass = 'show';

            return this.setState(newState, () => {
                setTimeout(() => {
                    newState.messageClass = 'hide';

                    this.setState(newState);
                }, this.state.timeoutInterval);
            });
        }

        // if username and password are NOT left blank, then take the username that
        // was given and search for matches in localStorage. If there is a match, display
        // the user exists message.
        for (let key in usernamesAndPasswords) {
            if (e.target[0].value === key) {
                let newState = this.state;

                newState.message = 'User already exists. Please go back to log in.';
                newState.messageClass = 'show';

                return this.setState(newState, () => {
                    setTimeout(() => {
                        newState.messageClass = 'hide';

                        this.setState(newState);
                    }, this.state.timeoutInterval);
                });
            }
        }

        // if username and password were NOT left blank AND the username given
        // does NOT exist in the database, then copy the new user's credentials into
        // localStorage and display the registration success message.
        let usernamesAndPasswordsCopy = JSON.parse(localStorage.getItem('usernamesAndPasswords'));
        usernamesAndPasswordsCopy[e.target[0].value] = e.target[1].value;

        localStorage.setItem('usernamesAndPasswords', JSON.stringify(usernamesAndPasswordsCopy));

        let newState = this.state;

        newState.message = 'Registration successful! Redirecting to log in page.';
        newState.messageClass = 'show';

        return this.setState(newState, () => {
            setTimeout(() => {
                newState.messageClass = 'hide';

                this.setState(newState, () => {
                    setTimeout(() => {
                        return this.setState({
                            loginSectionClass: ['show'],
                            registerSectionClass: ['hide', 'display-none'],
                        });
                    }, this.state.timeoutInterval);
                });
            }, this.state.timeoutInterval);
        });
    } // handleNewUser()

    render() {
        return (
            <div className = { `login-div ${ this.state.loginDivClass }` }>
                <a href='https://www.instagram.com'><img className = 'instagram-logo' src = { logo } alt='instagram logo' /></a>

                <section className = { this.state.loginSectionClass.join(" ") }>
                    <form className = 'login-form' onSubmit = { this.handleLogIn } >
                        <div className = 'login-input-div'>
                            <input className = 'login-input' type = 'text' placeholder = 'Enter username...' />
                            <input className = 'login-input' type = 'text' placeholder = 'Enter password...' />
                        </div>

                        <button className = 'form-btn login-btn' type = 'submit' >Log In</button>
                        <button className = 'form-btn register-btn' onClick = { this.handleRegister } >Register</button>
                    </form>
                </section>

                <section className = { `register-section ${ this.state.registerSectionClass.join(' ') }` }>
                    <form className = 'login-form' onSubmit = { this.handleNewUser }>
                        <div className = 'login-input-div'>
                            <input className = 'login-input' type = 'text' placeholder = 'Enter new username...' />
                            <input className = 'login-input' type = 'text' placeholder = 'Enter new password...' />
                        </div>

                        <button className = 'form-btn login-btn' onClick = { this.handleBackToLogIn }>Back to Log in</button>
                        <button className = 'form-btn register-btn' type = 'submit' >Register New User</button>
                    </form>
                </section>

                <p className = { this.state.messageClass }>{ this.state.message }</p>

            </div>
        );
    }
}

export default Login;

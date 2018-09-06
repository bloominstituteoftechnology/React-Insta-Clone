import React from 'react';
import logo from '../../assets/instagram-logo.png';

import './Login.css';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            wrongUserOrPasswordClass: '',
            loginDivClass: 'show',
            loginSectionClass: ['show'],
            registerSectionClass: [''],
            userExistsClass: [''],
            enterUsernameClass: [''],
            enterPasswordClass: [''],
            registerSuccessClass: [''],
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
        this.setState({
            wrongUserOrPasswordClass: 'show',
        }, () => {
            return setTimeout(() => this.setState({wrongUserOrPasswordClass: 'hide'}), 2000);
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

            if (newState.enterUsernameClass.includes('hide')) {
                newState.enterUsernameClass.splice(newState.enterUsernameClass.indexOf('hide'), 1);
            }

            if (newState.enterUsernameClass.includes('display-none')) {
                newState.enterUsernameClass.splice(newState.enterUsernameClass.indexOf('display-none'), 1);
            }

            if (!newState.enterPasswordClass.includes('display-none')) {
                newState.enterPasswordClass.push('display-none');
            }

            if (!newState.userExistsClass.includes('display-none')) {
                newState.userExistsClass.push('display-none');
            }

            if (!newState.registerSuccessClass.includes('display-none')) {
                newState.registerSuccessClass.push('display-none');
            }

            newState.enterUsernameClass.push('show');

            return this.setState(newState, () => {
                setTimeout(() => {
                    if (newState.enterUsernameClass.includes('show')) {
                        newState.enterUsernameClass.splice(newState.enterUsernameClass.indexOf('show'), 1);
                    }

                    newState.enterUsernameClass.push('hide');

                    this.setState(newState);
                }, 1500);
            });
            // else if password input is left blank, display the enter password message
        } else if (e.target[1].value === '') {
            let newState = this.state;

            if (newState.enterPasswordClass.includes('hide')) {
                newState.enterPasswordClass.splice(newState.enterPasswordClass.indexOf('hide'), 1);
            }

            if (newState.enterPasswordClass.includes('display-none')) {
                newState.enterPasswordClass.splice(newState.enterPasswordClass.indexOf('display-none'), 1);
            }

            if (!newState.userExistsClass.includes('display-none')) {
                newState.userExistsClass.push('display-none');
            }

            if (!newState.enterUsernameClass.includes('display-none')) {
                newState.enterUsernameClass.push('display-none');
            }

            if (!newState.registerSuccessClass.includes('display-none')) {
                newState.registerSuccessClass.push('display-none');
            }

            newState.enterPasswordClass.push('show');

            return this.setState(newState, () => {
                setTimeout(() => {
                    if (newState.enterPasswordClass.includes('show')) {
                        newState.enterPasswordClass.splice(newState.enterPasswordClass.indexOf('show'), 1);
                    }

                    newState.enterPasswordClass.push('hide');

                    this.setState(newState);
                }, 1500);
            });
        }

        // if username and password are NOT left blank, then take the username that
        // was given and search for matches in localStorage. If there is a match, display
        // the user exists message.
        for (let key in usernamesAndPasswords) {
            if (e.target[0].value === key) {
                let newState = this.state;

                if (newState.userExistsClass.includes('hide')) {
                    newState.userExistsClass.splice(newState.userExistsClass.indexOf('hide'), 1);
                }

                if (newState.userExistsClass.includes('display-none')) {
                    newState.userExistsClass.splice(newState.userExistsClass.indexOf('display-none'), 1);
                }

                if (!newState.enterUsernameClass.includes('display-none')) {
                    newState.enterUsernameClass.push('display-none');
                }

                if (!newState.enterPasswordClass.includes('display-none')) {
                    newState.enterPasswordClass.push('display-none');
                }

                if (!newState.registerSuccessClass.includes('display-none')) {
                    newState.registerSuccessClass.push('display-none');
                }

                newState.userExistsClass.push('show');

                return this.setState(newState, () => {
                    setTimeout(() => {
                        if (newState.userExistsClass.includes('show')) {
                            newState.userExistsClass.splice(newState.userExistsClass.indexOf('show'), 1);
                        }
        
                        newState.userExistsClass.push('hide');

                        this.setState(newState)
                    }, 1500);
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

        if (newState.registerSuccessClass.includes('hide')) {
            newState.registerSuccessClass.splice(newState.registerSuccessClass.indexOf('hide'), 1);
        }

        if (newState.registerSuccessClass.includes('display-none')) {
            newState.registerSuccessClass.splice(newState.registerSuccessClass.indexOf('display-none'), 1);
        }

        if (!newState.enterUsernameClass.includes('display-none')) {
            newState.enterUsernameClass.push('display-none');
        }

        if (!newState.enterPasswordClass.includes('display-none')) {
            newState.enterPasswordClass.push('display-none');
        }

        if (!newState.userExistsClass.includes('display-none')) {
            newState.userExistsClass.push('display-none');
        }

        newState.registerSuccessClass.push('show');

        return this.setState(newState, () => {
            setTimeout(() => {
                if (newState.registerSuccessClass.includes('show')) {
                    newState.registerSuccessClass.splice(newState.registerSuccessClass.indexOf('show'), 1);
                }

                newState.registerSuccessClass.push('hide');

                this.setState(newState, () => {
                    setTimeout(() => {
                        return this.setState({
                            loginSectionClass: ['show'],
                            registerSectionClass: ['hide', 'display-none'],
                        });
                    }, 1750);
                });
            }, 2000);
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
                    
                    <p className = { this.state.wrongUserOrPasswordClass }>Wrong username / password. Try again or register a new user.</p>
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

                    <p className = { `user-exists-p ${ this.state.userExistsClass.join(' ') }` }>User already exists. Please go back to log in.</p>
                    <p className = { `enter-username-p ${ this.state.enterUsernameClass.join(' ') }` }>Please enter a username.</p>
                    <p className = { `enter-password-p ${ this.state.enterPasswordClass.join(' ') }` }>Please enter a password.</p>
                    <p className = { `register-success-p ${ this.state.registerSuccessClass.join(' ') }` }>Registration successful! Redirecting to log in page.</p>
                </section>

            </div>
        );
    }
}

export default Login;

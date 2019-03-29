import React from 'react'

const withAuthenticate = Login => PostPage =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: localStorage.getItem('user') === null ? false : true
            }
        }

        login = () => {
            this.setState({
                loggedIn: true
            });
        }

        render() {
            return (
                this.state.loggedIn === false ?
                    <Login
                        loggedIn={this.state.loggedIn}
                        login={this.login}
                    /> : <PostPage />
            );
        }
    };

export default withAuthenticate;
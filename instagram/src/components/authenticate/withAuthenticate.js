import React from 'react'

const withAuthenticate = Component => Component2 =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: localStorage.getItem('user') === null ? false : true
            }
        }

        login = () => {
            this.setState({ loggedIn: true });
        }

        render() {
            return (
                this.state.loggedIn === false ?
                    <Component
                        loggedIn={this.state.loggedIn}
                        login={this.login}
                    /> : <Component2 />
            );
        }
    };

export default withAuthenticate;
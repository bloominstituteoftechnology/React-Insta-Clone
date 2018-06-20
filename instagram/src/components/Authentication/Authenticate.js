import React from 'react';
import PostPage from '../PostContainer/PostPage';

const Authenticate = App => {
    return (
        class extends React.Component {
            constructor() {
                super();
                this.state = {
                    loggedIn: false
                };
            }

            componentDidMount() {
                if(localStorage.getItem("username")) {
                    this.setState({loggedIn: true});
                }
            }

            render() {
                return (
                    this.state.loggedIn ? <PostPage /> : <App />
                );
            }
        }
    );
};

export default Authenticate;
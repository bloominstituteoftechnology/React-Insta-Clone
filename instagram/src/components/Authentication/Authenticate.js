import React from 'react';
import PostPage from '../PostContainer/PostPage';

// Render login page or post page
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
                } else {
                    this.setState({loggedIn: false});
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
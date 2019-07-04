import React from 'react';

const Authenticate = PostsPageComp => LoginComp => class extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            loggedIn: false,
        };
    }

    componentDidMount() {
        if (localStorage.getItem('loggedIn')) {
            this.setState({
                username: localStorage.getItem('loggedIn'),
                loggedIn: true,
            });
        }
    }

    render () {
        if (this.state.loggedIn) {
            return <PostsPageComp username = { this.state.username } />;
        } else {
            return <LoginComp />;
        }
    }
}

export default Authenticate;

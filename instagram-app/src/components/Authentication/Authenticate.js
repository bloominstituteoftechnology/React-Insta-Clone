import React from 'react';

 const Authenticate = PostsPage => LoginComp => class extends React.Component {
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
            return <PostsPage username = { this.state.username } />;
        } else {
            return <LoginComp />;
        }
    }
}

 export default Authenticate;
import React from 'react';
import checkAuth from './checkAuth';
import Login from '../Login/Login';
import PostPage from '../PostContainer/PostPage';

const Authenticate =  App =>
    class extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <AuthCheck password/>
                </div>
            )
        }
    };

const AuthCheck = checkAuth(Login)(PostPage);

export default Authenticate(PostPage);

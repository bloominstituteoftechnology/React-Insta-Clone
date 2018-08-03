import React from "react";
import PostsPage from "../components/PostContainer/PostsPage";

const Authenticate = Posts =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                username: '',
                password: '',
                LoggedIn: false
            };
        }

        change = e => {
            this.setState({ [e.target.name]: e.target.value })
        }

        newUser = e => {
            e.preventDefault();
            const name = this.state.username
            console.log(name)
            localStorage.setItem( 'username', name )
            if (name.length > 0) {
                this.setState({ LoggedIn: true})
            }

        }


        logout = e => {
            this.setState({LoggedIn: false})
            console.log(this.state.LoggedIn)
          }

        render() {
            if (this.state.LoggedIn) {
                return <PostsPage logged={this.state.LoggedIn} logout={this.logout} />
            }
            else {
                return (        
                    <div>
                        <form onSubmit={this.newUser}>
                            username: <input
                                type='text'
                                name='username'
                                value={this.state.username}
                                onChange={this.change}
                            />

                            <hr />

                            password: <input
                                type='text'
                                name='password'
                                value={this.state.password}
                                onChange={this.change}
                            />

                            <hr />

                            <button
                            type='submit'>
                            Log In
                            </button>
                        </form>
                    </div>
            )
            }
            
        }
    };

export default Authenticate;


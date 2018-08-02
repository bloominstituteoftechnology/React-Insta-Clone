import React from "react";

const Authenticate = Posts =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                username: ''
            };
        }

        change = e => {
            this.setState({ [e.target.name]: e.target.value })
        }

        newUser = e => {
            e.preventDefault();
            localStorage.setItem({ username: this.state.username })
        }


        render() {
            return (

                this.state.username.length() > 0 ? <Posts username={this.state.username}/> :

                    <div>
                        <form>
                            username: <input
                                type='text'
                                name='usernname'
                                value={this.state.username}
                                onChange={this.change}
                            />
                        </form>
                    </div>

            )
        }
    };

export default Authenticate;


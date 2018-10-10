import React from 'react';


const Authenticate = (App, Login) => {
    return class WrappedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false,
            };
        }


        render() {
            if (this.state.loggedIn) {
                return(
                    <div className='authenticate'>
                        <App />
                    </div>
                )
            }
            else {
                return (
                    <div className='authenticate'>
                        <Login />
                    </div>
                )
            }

        }
    }
}

export default Authenticate;
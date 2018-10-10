import React, {Component} from 'react';

    const Authenticate = PassedComp => {
        return class WrappedComp extends Component {
            constructor(props){
                super(props);
            }

            render() {
                return(
                    <PassedComp />
                )
            }
        };
    };

export default Authenticate;
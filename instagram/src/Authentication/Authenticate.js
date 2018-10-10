import React, {Component} from 'react';

const Authenticate = NewComponent => class extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <NewComponent />
        )
    }
};

export default Authenticate;
import React, { Component } from 'react';

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }


    componentsEventHandler = event => {
        this.setState({ [event.target]: event.target })
    };

    componentsEventHandler2 = event => {

    };

    render() {

    }

}

export default Components;
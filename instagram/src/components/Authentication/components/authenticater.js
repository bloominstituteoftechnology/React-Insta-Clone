import React from 'react';

const authenticater = PassedComp => OtherComp => props => {
    if (props.open) {
        return (<PassedComp />)
    }
    return (<OtherComp {...props}/>)
};
export default authenticater;
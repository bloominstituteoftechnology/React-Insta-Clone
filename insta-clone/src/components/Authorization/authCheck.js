import React from 'react';

const authCheck = CompOne => CompTwo => props => {
    if(props.username) {
        console.log('comp1', props)
        return <CompTwo {...props} />;
    }
    console.log('comp2', props)
    return <CompOne {...props} />;
};

export default authCheck;
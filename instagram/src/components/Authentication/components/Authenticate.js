import React from 'react';
import PostPage from '../../PostContainer/components/PostPage';
import Search from '../../SearchBar/components/Search';

const authenticate = PassedComp => OtherComp => props => {
    if (props.first) {
        return (<PassedComp {...props} />)
    }
    return (<OtherComp {...props} />)
};

const Authenticate = authenticate(PostPage)(Search);

export default Authenticate;
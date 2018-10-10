import React from 'react';
import PostContainer from '../PostContainer/PostContainer';


function authenticate(PostContainer, selectData){
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state={
                data: selectData(Datasource, props)
            };
        }

        componentDidMount

        render() {
            return <PostContainer data={this.state.data} {...this.props} />
        }

    }
}

const AuthenticatePosts = authenticate(PostContainer)


export default Authenticate;
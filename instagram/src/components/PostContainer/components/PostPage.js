import React, { Component } from 'react';

import Search from '../../SearchBar/components/Search';
import Container from './Container';

import dummyData from '../../../dummy-data';

class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            newData: '' 
        }
    }
    componentDidMount() {
        this.setState({data: dummyData})
      }
    render() { 
        return ( 
        <div className="App">
            <Search />
            <Container 
            data={this.state.data}/>
      </div> );
    }
}
 
export default PostPage;
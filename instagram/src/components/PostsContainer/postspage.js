import React from 'react';
import Posts from '../PostsContainer/posts';
import SearchBar from '../SearchBar/search.js';
import Login from '../Login/login.js';
import styled from 'styled-components';





class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input:"",
            dummyData:props.dummyData
            

        }
    }

    newSearch = event => this.setState({input:event.target.value})////allows you to type into field////


    
    searchInput = (event) => {
        event.preventDefault();
        let dummyData = this.state.dummyData.slice();
        dummyData = dummyData.filter(dummyData => {
            return dummyData.username === this.state.input});
                this.setState({ dummyData: dummyData });       
    };




    render() {
        console.log(this.state.dummyData, "hello")
    return (
        
        <div className="App">
        <header className="App-header">
          
          <div className="App-title"><SearchBar input={this.state.input} newSearch={this.newSearch} searchInput={this.searchInput}/></div>
        </header>

        <div className="primary">
          {this.state.dummyData.map(post => (
              <Posts key={post.timestamp} dummyData={post} />
          ))}
        </div>
        
      </div>
    )
}
}
 
export default PostsPage;
 





import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostWrapper from './components/PostContainer/PostWrapper';
import Authenticate from "./components/Authenticate/Authenticate";


class App extends Component {
constructor(){
        super();

	this.state={
		dummyData: [],
		searchData: [],
};

}	

componentDidMount(){
	this.setState({dummyData: dummyData});
}


searchPost = event => {
        event.preventDefault();
        let dummyData =this.state.dummyData.slice();
        dummyData = dummyData.filter(dummyData => 
		
		{if(dummyData.username.includes(event.target.value))
		{
			return dummyData; 
		}
		});
		 this.setState({dummyData: dummyData});
}	


  render() {
    return (
      <div className="App">
	<SearchBar SearchValue={this.state.searchItem} changeSearchValue={this.changeSearchBarValue} searchTrigger={this.searchPost}  />

	 <div>
	{this.state.dummyData.map(dummyData => 
		<PostWrapper key={dummyData.timestamp} dummyData={dummyData}/>
	
	)}		
	 </div> 

      </div>
    );
  }
}

export default Authenticate(App);


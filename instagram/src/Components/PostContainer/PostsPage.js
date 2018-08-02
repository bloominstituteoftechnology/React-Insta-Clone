import React, {Component} from 'react'; 
import dummyData from '../../dummy-data.js'
import SearchBar from '../SearchBar/SearchBar';
import AllPostContainers from './AllPostContainers';

class PostsPage extends Component {
    constructor(){
      super(); 
      this.state = {
        data: [], 
        filteredData : [], 
        searchValue: '', 
        username: ''
      }
    }
  
    componentDidMount() {
        const username = localStorage.getItem('username');
      this.setState({
        data: dummyData,
        username: username
      })
    }
  
    
    valueHandler = (event) => {
      const value = event.target.value;
      this.setState({
        searchValue : value
      })
    }
    
    submitSearchHandler = (event) => {
      event.preventDefault(); 
      const users = this.state.data.filter(post => {
          if(post.username.includes(this.state.searchValue)){
            return post; 
          }
        }); 
        this.setState({
          filteredData: users,
          searchValue: ''
        })
    }

    logOutClickHandler = (event) => {
      localStorage.removeItem('username'); 
      window.location.reload();
    }
  
    render() {
      return (
        <div className="App">
          <SearchBar change= {this.valueHandler} submit = {this.submitSearchHandler} logOutClick = {this.logOutClickHandler}/>
          <AllPostContainers 
          data ={
            this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data
          } />
        </div>
      );
    }
  }
  
  export default PostsPage;

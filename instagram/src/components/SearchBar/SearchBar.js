import React from 'react';
import './SearchBar.css';
import App from './../../App'
/*At the end of Day I there will be a single instance of the Search Bar being rendered at the top of the page */
class SearchBar extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        query: '',
        Data: []
        
      }
     
     this.handleInputChange = (e) => {
         e.preventDefault();
        this.setState({
          query: this.search.value,
          Data: (this.props.content.map((e)=>{
            return (e.username)
          }))
          })
        
      }
    this.handleOnSubmit = (e) => {
        e.preventDefault();
    }
  
    
    
    
    }

     
    
    
      render() {
          console.log(this.state.Data)
        return (
          <form onSubmit={this.handleOnSubmit}>
            <input
              placeholder="Search"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
           
            <p>{(this.state.Data.filter((term)=>{return((term === this.search.value))

            }
            ))}</p>
          </form>
        )
      }
}
export default SearchBar 


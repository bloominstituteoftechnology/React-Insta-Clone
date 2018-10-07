import React, { Component } from 'react'
import insta from'./insta.png';

class Search extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
     <div>

     <form>
       <i class="fab fa-instagram"></i> |
          <img src={insta} alt='logo'/>

       <input
         placeholder=" Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
<i class="far fa-compass"></i>
<i class="far fa-heart"></i>
<i class="far fa-user"></i>

     </form>
   </div>
   )
 }
}

export default Search

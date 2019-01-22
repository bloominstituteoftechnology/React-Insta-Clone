import React from 'react';
import image1 from './Image1.jpg';
import image2 from './Image2.jpg';
import image3 from './Image3.jpg';
import image4 from './Image4.jpg';


class SearchBar extends React.Component {
    constructor () {
        super();

        this.state ={
            search: "",

        }

    }
    
    changeIt = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      componentDidMount() {
        
      }

    
    render() {
        return (
            
            <div className ="searchbar">

                <div className="searchbarA">
                    <img src={image1} alt=""></img>
                </div>

                <div className="searchbarCenter">
                
                    <form className='addcomment' onSubmit={this.addComment}>
                        <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        
                        value={this.state.search}
                        
                        onChange={this.changeIt}
                        
                        />
                    </form>
                </div> 

                <div className="searchbarA">
                    <img src={image2} alt=""></img>
                    <img src={image3} alt=""></img>
                    <img src={image4} alt=""></img>
                </div>

            </div>
        )
    }
}

export default SearchBar;
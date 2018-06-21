import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dummyData: props.dummyData,
            input: '',
            placeholder: '&#xf002; Search'
        }
    }

    changeSearch = event => this.setState({input: event.target.value});

    logout = (event => {
        localStorage.removeItem('user');
        localStorage.removeItem('password');
        document.location.reload();
    })
    // newSearch = (event, i) => {
    //     event.preventDefault();
    //     let search = this.state.dummyData.username.slic();
    //     search = search.filter(item => )      
    // }

    render() {
        return (
            <div className="search-header">
                <div className="div1">
                    <i className="fa">&#xf16d;</i>
                    <h3>Instagram</h3>
                </div>
                
                <div className="div-mid">
                    <form onSubmit={this.newSearch}>
                        <input type="text" onChange={this.changeSearch} className="fa" placeholder={this.state.placeholder} value={this.state.input} />
                    </form>
                    <h5 className="logout-btn" onClick={this.logout}>Logout</h5>    
                </div>
                
                
                <div className="div2">
                    <i className="fa">&#xf14e;</i>
                    <i className="fa">&#xf08a;</i>
                    <i className="fa">&#xf2c0;</i> 
                </div> 
            </div>
        )  
    }
    
}
 
export default SearchBar;
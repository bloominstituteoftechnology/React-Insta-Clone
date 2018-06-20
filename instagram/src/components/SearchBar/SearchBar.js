import React from 'react';

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

    // newSearch = (event, i) => {
    //     event.preventDefault();
    //     let search = this.state.dummyData.username.slic();
    //     search = search.filter(item => )      
    // }

    render() {
        return (
            <form onSubmit={this.newSearch}>
                <input type="text" onChange={this.changeSearch} className="fa" placeholder={this.state.placeholder} value={this.state.input} />
            </form>
        )  
    }
    
}
 
export default SearchBar;
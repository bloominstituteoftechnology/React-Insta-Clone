import React from 'react'
import './SearchBar.scss';
import { Button } from 'reactstrap';

class SearchBar extends React.Component{
	constructor(props){
		super(props)
		this.state={
			query: ''
		}
	}
	render(){
		return (
		
			 <div className="searchBarContainer">
				<div className="logoBox">
					<button className="logoButton"><i className="fab fa-instagram"  /></button>
					<img className="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
				</div>
				<div className="searchInputContainer">
					<input type="text" className="searchInput" value={this.state.query} placeholder="Search"/>
					<button className="searchButton"><i className="fas fa-search"/></button>
				</div>
				<div className="right">
					<button className=""><i className="fab fa-instagram"/></button>
					<button className=""><i className=" far fa-heart"/></button>
					<button className=""><i className="fas fa-user-friends"/></button>
				</div>
			</div>
		)
	}

}

export default SearchBar


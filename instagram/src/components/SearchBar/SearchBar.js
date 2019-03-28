import React from 'react'
import './SearchBar.scss';
class SearchBar extends React.Component{
	constructor(props){
		super(props)
		this.state={
			query: ''
		}
	}
	onQueryChange = (e)=>{
		const val = e.trim()
		this.setState({query: val})
		this.props.onQueryChange(val)
	}
	
	onSearchPost = (e)=>{
		e.preventDefault()
		this.props.onSearchPost(e, this.state.query)
		this.setState({query: ''})
	}
	
	render(){
		return (
			 <div className="searchBarContainer">
				<div className="logoBox">
					<button className="logoButton"><i className="fab fa-instagram" /></button>
					<img className="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
				</div>
				<div className="searchInputContainer">
					<input type="text"
						className="searchInput"
						placeholder="Search"
						onChange={(e)=> this.onQueryChange(e.target.value)}
						/>
					<button className="searchButton" onClick={e => this.onSearchPost(e)}>
						<i className="fas fa-search"/>
					</button>›
				</div>
				<div className="right">
					<button className=""><i className="fab fa-instagram"/></button>
					<button className=""><i className=" far fa-heart"/></button>
					<button className="logoutButton"
							onClick={this.props.onLogout}><i className="fas fa-user-friends"/>Logout</button>
				</div>
			</div>
		)
	}

}

export default SearchBar


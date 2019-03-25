import React from 'react'

class SearchBar extends React.Component{
	constructor(props){
		super(props)
		this.state={
			query: ''
		}
	}
	render(){
		return (
			<div>
				<div>
					<button className="logoButton"><i className="fab fa-instagram"  /></button>
					<input type="text" className="searchInput" value={this.state.query}/>
					<button className="searchButton"><i className="fas fa-search"/></button>
				</div>
				<div>
					<button className="logoButton"><i className="fal fa-compass"/></button>
					<button className="logoButton"><i className="fab fa-instagram"  /></button>
					<button className="searchButton"><i className="fal fa-user"/></button>
				</div>
			</div>
		)
	}

}

export default SearchBar


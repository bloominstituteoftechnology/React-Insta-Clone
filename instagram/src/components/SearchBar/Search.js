import React from 'react'
import "../../App.css"
import PropTypes from 'prop-types';

const Search = props => {

	
		
			const clickHandler = (e) => {
					console.log("clickHandler")
			}
			const submitHandler = () => {
				
				alert("wait")
			}

    return (
        <div>
        <form className="searchForm" onSubmit={submitHandler} value={this.props.value}>
				<input
					className="searchBarInput"
					placeholder="Search..."
					type="text"
					value={props.value}
					onChange={clickHandler}
					/>
			</form>
            </div>
    )


}

export default Search;

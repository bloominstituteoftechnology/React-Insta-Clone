import React from 'react'
import "../../App.css"
import PropTypes from 'prop-types';

const Search = props => {



    return (
        <div>
        <form className="searchForm" onSubmit={submitHandler} value={props.value}>
				<input
					className="searchBarInput"
					placeholder="Search..."
					type="text"
					value={props.value}
					onChange={clickHandler}
					placeholder={'Search...'}
				/>
			</form>
            </div>
    )


}

export default Search;

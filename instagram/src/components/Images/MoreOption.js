import React from 'react';

const MoreOption = (props) => {
	return (
		<div className="dropdown">
			<button className="dropbtn">
				<svg className="moreOption" viewBox="0 0 512 512">
					<path
						fill="currentColor"
						d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
					/>
				</svg>
			</button>
			<div id="myDropdown" className="dropdown-content">
				<p>Report inappropriate</p>
				<p>Share</p>
				<p>Cancel</p>
			</div>
		</div>
	);
};

export default MoreOption;

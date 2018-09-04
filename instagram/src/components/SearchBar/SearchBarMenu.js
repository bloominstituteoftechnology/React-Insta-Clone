import React from 'react';

function SearchBarMenu(props) {
    return(
        <div>
            <button>
                <img
                    className="icon"
                    src="instagram-new.png"
                    alt="instagram compass icon">
                </img>
            </button>

            <button>
                <img
                    className="icon"
                    src="instagram-new.png"
                    alt="instagram heart icon">
                </img>
            </button>

            <button>
                <img
                    className="icon"
                    src="instagram-new.png"
                    alt="instagram profile icon">
                </img>
            </button>
        </div>
    );
}

export default SearchBarMenu;
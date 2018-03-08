import React from 'react';
import './searchBar.css';

export const SearchBar =(props) => {
    return (
        <div className="SearchBar"> {/* !! overall styling */}
            <div className="SearchBar__elements"> {/* !! overall styling */}
                <div>IG img</div> {/* !! need icon */}
                <div>Instagram</div> {/* !! need icon or font */}
                <div>Search</div> {/* !! need to add search component */}
                <div>Location icon</div> {/* !! need icon */}
                <div>Like icon</div> {/* !! need icon */}
                <div>Account icon</div> {/* !! need icon */}
            </div>
        </div>
    )
};
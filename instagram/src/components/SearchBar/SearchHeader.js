import React, { Component } from 'react';


class SearchHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.class}>
                <img src='https://image.flaticon.com/icons/svg/1077/1077042.svg' alt='instagram logo'/>
                <div className='line'></div>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default SearchHeader;

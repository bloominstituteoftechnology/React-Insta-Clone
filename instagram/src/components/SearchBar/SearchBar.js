import React, {Component} from 'react';

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            searchItem = []
        };

    };

    render() {
        return(
            <div className={'row'}>
                <img src={'./../../logo.svg'} />

            </div>
        );
    }
}
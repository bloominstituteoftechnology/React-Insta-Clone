import React, {Component} from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    height: 24px;
    width: 210px;
    margin-left: -25px;
    border: 1px solid lightgray;
    border-radius: 2px;
    text-align: center;
    font-size: 14px;
`

class SearchInputs extends Component  {
    state = {
        value: ""
    }
    componentDidMount() {
        this.setState((state)   =>  ({
            value: this.props.value
        }))
    }
    onChangeHandler =   ({ target })  =>  {
        this.props.filter(target.value)
    }
    render()    {
        return(
            <div>
                <SearchInput value={this.state.value} onChange={this.onChangeHandler} placeholder="Search"/>
                <i className="fa fa-search" aria-hidden="false"></i>
            </div>
        )
    }
}

export default SearchInputs;

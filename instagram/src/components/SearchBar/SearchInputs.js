import React, {Component} from 'react';

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
                <input value={this.state.value} onChange={this.onChangeHandler} className="search" placeholder="Search"/>
                <i className="fa fa-search" aria-hidden="false"></i>
            </div>
        )
    }
}

export default SearchInputs;

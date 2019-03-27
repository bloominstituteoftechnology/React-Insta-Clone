import React from 'react';

const withAuthenticate = FirstComponent => SecondComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        isAuthenticated: false
      };
    }

    componentDidMount() {
      const user = localStorage.getItem('username');
      const username = JSON.parse(user);

      if (username) {
        this.setState({
          isAuthenticated: !this.state.isAuthenticated
        });
      }
    }

    render() {
      if (this.state.isAuthenticated === true) {
        return (
          <FirstComponent
            dummyData={this.props.state.dummyData}
            search={this.props.state.search}
            text={this.props.state.text}
            filteredData={this.props.state.filteredData}
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
          />
        );
      } else {
        return (
          <SecondComponent
            onChange={this.props.onChange}
            username={this.props.state.username}
            password={this.props.state.password}
            user={this.props.state.user}
            pass={this.props.state.pass}
          />
        );
      }
    }
  };

export default withAuthenticate;

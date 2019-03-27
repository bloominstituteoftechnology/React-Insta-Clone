import React, {Component} from 'react';
import './App.css';
import moment from 'moment';

import dummyData from './dummy-data';
import withAuthenticate from './authentification/withAuthenticate';
import PostPage from './components/PostPage';
import LoginPage from './components/login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: '',
      text: '',
      filteredData: [],
      username: '',
      password: '',
      user: 'guillaume',
      pass: 'password'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dummyData,
        filteredData: Array.from(dummyData)
      });
    }, 2500);
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    //Find post that contains the username from the search input
    if (e.target.name === 'search') {
      this.setState({
        filteredData: this.state.dummyData.filter(data => {
          return data.username.includes(e.target.value);
        })
      });
    }
  };
  handleAddComment = (e, id) => {
    e.preventDefault();

    const newComment = {
      id: Date.now().toString(),
      text: this.state.text,
      username: 'Guillaume',
      timeStamp: moment()
        .startOf('hour')
        .fromNow()
    };

    this.setState({
      filteredData: this.state.filteredData.map(data => {
        if (data.id === id) {
          return {...data, comments: [...data.comments, newComment]};
        }
        return data;
      }),
      text: ''
    });
  };

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate
          state={this.state}
          onChange={this.onInputChange}
          onSubmit={this.handleAddComment}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import movieApi from '../../../utils/movieApi';
import Body from './Body/Body';
import Header from './Header/Header'

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let movieApiObj = new movieApi();
    movieApiObj.fetchAllMovies()
    .then(data => {
      this.props.fetchRecentMovies(data)
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}

import React, { Component } from 'react';
import Grid from '../../components/Grid';
import People from './components/People';
// import peopleData from './data/people';

class PeoplePage extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        results: []
      },
    }
  }

  componentDidMount() {
    fetch("http://localhost:8183/people")
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(res => this.setState({ data: res }));
  }

  render() {
    const { data } = this.state;
    return (
      <Grid
        results={data.results.map(card => <People people={card} />)}
      />
    )
  }
}

export default PeoplePage;
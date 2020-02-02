import React, { Component } from 'react';
import Card from '../../../components/Card';


class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Film Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Film get derived state", props, state);
    return state;
  }

  componentDidMount() {
    console.log("Film did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Film should component update", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Film getSnapshotBeforeUpdate", prevProps, prevState);
    return 1;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Film component  did update", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("Film will unmount");
  }

  render() {
    const { film = {} } = this.props;
    const { title } = film;
    const headline = film.opening_crawl.substr(0, 50);
    const content = `Director: ${film.director}, Producer: ${film.producer}, release_date ${film.release_date} `;
    return (
      <Card avatar="F" title={title} headline={headline} content={content} />
    )
  }
}

export default Film;
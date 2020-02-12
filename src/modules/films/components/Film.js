import React, { Component } from 'react';
import Card from '../../../components/Card';


class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.film.title
    };
    // console.log("Film Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("Film get derived state", props, state);
    return state;
  }

  componentDidMount() {
    // console.log("Film did mount");
    // setTimeout(() => {
    //   this.setState({ title: 'A new title' }, () => console.log('title changed'));
    // }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("Film should component update", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log("Film getSnapshotBeforeUpdate", prevProps, prevState);
    return 1;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("Film component  did update", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    // console.log("Film will unmount");
  }

  render() {
    const { film = {} } = this.props;
    // const { title } = film;
    const { title } = this.state;
    const headline = film.opening_crawl.substr(0, 50);
    // console.log('title', title);
    const content = `Director: ${film.director}, Producer: ${film.producer}, release_date ${film.release_date} `;
    return (
      <Card avatar="F" title={title} headline={headline} content={content} />
    )
  }
}

export default Film;
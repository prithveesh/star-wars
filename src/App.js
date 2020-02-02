import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Film from './modules/films/components/Film';
import People from './modules/people/components/People';
import Planet from './modules/planets/components/Planet';
import Grid from './components/Grid';
import filmsData from './modules/films/data/films';
import peopleData from './modules/people/data/people';
import planetData from './modules/planets/data/planets';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      card: <Planet planet={planetData.results[0]} />
    }
    console.log("App Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App get derived state", props, state);
    return state;
  }

  componentDidMount() {
    console.log("App did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App should component update", nextProps, nextState);

    if (nextState.tab === 2 && this.state.tab === 1) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("App getSnapshotBeforeUpdate", prevProps, prevState);
    return 1;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App component  did update", prevProps, prevState, snapshot);
  }



  tabChanged = (event, value) => {
    if (value === 0) {
      this.setState({ tab: value });
      this.setState({ card: <Film film={filmsData.results[0]} /> });

    } else if (value === 1) {
      this.setState({ tab: value });
      this.setState({ card: <Planet planet={planetData.results[0]} /> });
    } else if (value === 2) {
      this.setState({ tab: value });
      this.setState({ card: <People people={peopleData.results[0]} /> });
    }
  }

  render() {
    console.log("App render");
    const { tab, card } = this.state;
    return (
      <div className="App" >
        <Header />
        <Menu tabChanged={this.tabChanged} tab={tab} />
        <Grid
          card={card}
        />
      </div>
    );
  }
}

export default App;

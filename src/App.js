import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import Menu from './components/Menu';
import FilmsPage from './modules/films';
import PeoplePage from './modules/people';
import PlanetsPage from './modules/planets';
import './App.scss';
import ContactUs from './modules/contactUs';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => (
      <>
        <FilmsPage />
        <PlanetsPage />
        <PeoplePage />
      </>
    ),
  },
  {
    path: '/films',
    exact: true,
    component: FilmsPage,
  },
  {
    path: '/planets',
    exact: true,
    component: PlanetsPage,
  },
  {
    path: '/people',
    exact: true,
    component: PeoplePage,
  },
  {
    path: '/contact-us',
    exact: true,
    component: ContactUs,
  }
]

class App extends Component {

  headerElement = React.createRef()

  constructor(props) {
    super(props);
    this.state = {
      tab: window.location.pathname
    }
    // console.log("header: ", this.headerElement);
    // console.log("App Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("App get derived state", props, state);
    return state;
  }

  componentDidMount() {
    // console.log("header: ", this.headerElement);
    setTimeout(() => {
      this.headerElement.current.height = 100;
    }, 2000);
    // console.log("App did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("App should component update", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log("App getSnapshotBeforeUpdate", prevProps, prevState);
    return 1;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("App component  did update", prevProps, prevState, snapshot);
  }



  tabChanged = (event, value) => {
    this.setState({ tab: value });
    // window.location.href = value; // Do not do this for routing within the app
    const { location, history } = this.props;
    history.push(value, {
      replace: true
    });
  }

  render() {
    const { tab } = this.state;
    return (
      <div className='App' >
        <Header headerRef={this.headerElement} />
        <Menu tabChanged={this.tabChanged} tab={tab} />
        {/* <Switch>
          <Route path="/" exact>
            <Redirect to='/films' />
          </Route>
          <Route path="/films">
            <FilmsPage />
          </Route>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path="/planets">
            <PlanetsPage />
          </Route>
        </Switch> */}

        {/* <Switch>
          <Route path="/" exact>
            <PlanetsPage />
            <PeoplePage />
            <FilmsPage />
          </Route>
          <Route path="/films">
            <FilmsPage />
          </Route>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path="/planets">
            <PlanetsPage />
          </Route>
        </Switch> */}
        {renderRoutes(routes)}
      </div>
    );
  }
}

/*

/ -> starwars.com
starwars.com/films
starwars.com/planets

*/

export default withRouter(App);

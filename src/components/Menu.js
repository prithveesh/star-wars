import React, { useState, useCallback, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const menuList = [
  {
    label: 'Films',
    value: '/films'
  }, {
    label: 'Planets',
    value: '/planets'
  }, {
    label: 'People',
    value: '/people'
  }, {
    label: 'Contact Us',
    value: '/contact-us'
  }
]

function Menu(props) {

  const { tab, tabChanged } = props;
  const [currentTab, setTab] = useState(tab);
  const history = useHistory();
  const location = useLocation();

  const handleTabChange = useCallback((event, value) => {
    setTab(value);
    history.push(value);
    // tabChanged(event, value);
  }, []);

  // useEffect(() => {
  //   console.log("new location: " + location.pathname);
  //   return () => {
  //     console.log("current location: " + location.pathname);
  //   }
  // }, [location]);

  return (
    <>
      <AppBar position="static">
        <Tabs value={currentTab} centered onChange={handleTabChange} aria-label="simple tabs example">
          {/* <Link to="/films" >
              <Tab label="Film" />
            </Link>
            <Link to="/planets" >
              <Tab label="Planet" />
              </Link>
              <Link to="/people" >
              <Tab label="People" />
            </Link> */}
          {/* <Tab label="Film" value="/films" />
          <Tab label="Planet" value="/planets" />
          <Tab label="People" value="/people" /> */}
          {menuList.map(menuItem => <Tab key={menuItem.value} label={menuItem.label} value={menuItem.value} />)}
        </Tabs>
      </AppBar>
    </>
  )
}

export default Menu;
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

class Menu extends Component {

  render() {
    const { tab, tabChanged } = this.props;
    return (
      <>
        <AppBar position="static">
          <Tabs value={tab} centered onChange={tabChanged} aria-label="simple tabs example">
            <Tab label="Film" />
            <Tab label="Planet" />
            <Tab label="People" />
          </Tabs>
        </AppBar>
      </>
    )
  }
}

export default Menu;
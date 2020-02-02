import React from 'react';
import Box from '@material-ui/core/Box';
import Logo from '../assets/images/logo.png';

function Header(props) {

  return (
    <Box>
      <img src={Logo} height="100" alt="Star Wars" />
    </Box>
  )
}

export default Header;
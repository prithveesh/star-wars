import React from 'react';
import Box from '@material-ui/core/Box';
import Logo from '../assets/images/logo.png';

function Header(props) {
  const { headerRef } = props;
  return (
    <Box>
      <img ref={headerRef} src={Logo} height="100" alt="Star Wars" />
    </Box>
  )
}

export default Header;
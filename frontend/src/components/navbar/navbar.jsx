import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-scroll';
import './navbar.css';

const DoubleNavbar = () => {
  return (
    <div className="root">
      <AppBar position="fixed" className="appBar">
        <Toolbar className="toolbar">
          <div>
            <Typography variant="body1">
              +91 00000 00000
            </Typography>
          </div>
          <div>
            <Typography variant="body1">
              contact@skyblulabs.com
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <AppBar position="fixed" className="mainAppBar">
        <Toolbar className="toolbar mainToolbar">
          <div className="logoContainer">
            <img src='skyblulabs white.png' alt="Logo" className="logoImage" />
          </div>
          <div className="mainNavLinks">
            <Link to='overlayContainer' smooth={true} duration={500}>
              <Typography variant="body1" className='scroll-link'>
                Home
              </Typography>
            </Link>
            <Link to='about' smooth={true} duration={500}>
              <Typography variant="body1" className='scroll-link'>
                About Us
              </Typography>
            </Link>
            <Link to='servicecontainer' smooth={true} duration={500}>
              <Typography variant="body1" className='scroll-link'>
                Services
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default DoubleNavbar;
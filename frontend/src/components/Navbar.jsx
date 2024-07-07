import * as React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import '@fontsource/roboto';
import logo from '../assets/logo.png';
import { HashLink } from 'react-router-hash-link';

const navItems = [
  { label: 'Job Support', link: '/#jobsupport' },
  // { label: 'Solutions', link: '/#solutions' },
  { label: 'About Us', link: '/aboutus' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#0A1C32', color: '#E6E0E9', height: '100%' }}>
      <RouteLink to="/">
        <img src={logo} alt="Logo" style={{ margin: '16px 0', height: '40px' }} />
      </RouteLink>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ justifyContent: 'center' }}>
            <HashLink to={item.link} key={item.label} style={{ textDecoration: 'none' }} onClick={handleDrawerToggle}>
              <ListItemButton sx={{ justifyContent: 'center' }}>
                <ListItemText primary={item.label} sx={{ fontFamily: 'Roboto', fontSize: 14, fontWeight: '400', textAlign: 'center', color: '#E6E0E9' }} />
              </ListItemButton>
            </HashLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" sx={{ height: 80, backgroundColor: '#0A1C32' }}>
        <Toolbar disableGutters sx={{ height: '100%', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <RouteLink to="/">
            <img src={logo} alt="Logo" style={{ height: '40px', display: { xs: 'none', sm: 'block' }, paddingLeft: '3.802vw' }} />
          </RouteLink>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, gap: '2.5vw', alignItems: 'center' }}>
            {navItems.map((item) => (
              <HashLink to={item.link} key={item.label} style={{ textDecoration: 'none' }}>
                <Button component='div' sx={{ color: '#E6E0E9', fontFamily: 'Roboto', fontSize: 18, fontWeight: '400', textTransform: 'none' }}>
                  {item.label}
                </Button>
              </HashLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <RouteLink to="/contactus">
            <div style={{ paddingRight: '3.802vw' }}>
              <Button
                sx={{
                  color: '#fff',
                  fontFamily: 'Roboto',
                  fontSize: 18,
                  fontWeight: '500',
                  textTransform: 'none',
                  border: '1px solid #fff',
                  borderRadius: '40px',
                  padding: '6px 14px',
                }}
              >
                Contact Us
              </Button>
            </div>
          </RouteLink>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
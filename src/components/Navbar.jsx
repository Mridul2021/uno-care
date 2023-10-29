import React, { useState } from 'react';
import { AppBar, Button, Toolbar, IconButton, Drawer, Hidden, Tabs, Tab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UNO from '../images/UNO.png'
// Rest of your code...


const buttonStyles = {
  textTransform: 'none', // This will keep the text in lowercase
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  
  return (
    <div>
      <AppBar position="fixed" elevation={0} sx={{background:'#FFF'}}>
        <Toolbar>
          {/* Mobile Menu Icon (Hidden on Desktop) */}
          <Hidden smUp>
            <IconButton color="black" edge="start" aria-label="menu" onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <Hidden smDown>
          {/* Logo */}
          <img
            src={UNO}
            alt="Logo"
            style={{ width: 110, height: 20, marginRight: 'auto', marginLeft: '20px' }}
          />
          <Tabs sx={{marginLeft:"auto", color:'#000000'}} >
            <Tab style={buttonStyles}  label='About US'/>
            <Tab style={buttonStyles} label='Locations'/>
            <Tab style={buttonStyles} label='Specializations'/>
            <Tab style={buttonStyles} label='Contact Us'/>
          </Tabs>
            <Button
              variant="outlined"
              size="medium"
              style={buttonStyles}
              sx={{ borderRadius: 20, color: 'blue', marginRight:'30px', borderColor:'blue' }}
            >
              Corporate Login
            </Button>
            <Button
              variant="contained"
              size="medium"
              style={buttonStyles}
              sx={{
                borderRadius: 20,
                color: 'white',
                backgroundColor: 'blue',
                marginRight: '50px',
              }}
            >
              Doctor Login
            </Button>
          </Hidden>

          {/* Mobile Menu (Hidden on Desktop) */}
          <Hidden smUp>
          {/* Logo */}
          <img
            src={UNO}
            alt="Logo"
            style={{ width: 110, height: 20, marginRight: 'auto', marginLeft: 'auto' }}
          />
            <Drawer anchor="left" open={menuOpen} onClose={toggleMenu} >
              <div style={{ width: 200 }}>
                <Button variant="text"  onClick={toggleMenu} color="inherit" style={buttonStyles} sx={{borderRadius: 5, marginRight:'80px', marginBottom:'10px', marginTop:'20px'}}>
                  About Us
                </Button>
                <Button variant="text" onClick={toggleMenu} color="inherit" style={buttonStyles} sx={{borderRadius: 5, marginRight:'80px', marginBottom:'10px'}}>
                  Locations
                </Button>
                <Button variant="text" onClick={toggleMenu} color="inherit" style={buttonStyles} sx={{borderRadius: 5, marginRight:'80px', marginBottom:'10px'}}>
                  Specializations
                </Button>
                <Button variant="text" onClick={toggleMenu} color="inherit" style={buttonStyles} sx={{borderRadius: 5, marginRight:'80px', marginBottom:'10px'}}>
                  Contact Us
                </Button>
                <Button variant="text" onClick={toggleMenu} color="inherit" style={buttonStyles} sx={{borderRadius: 5, marginBottom:'10px'}}>
                    Corporate Login
                </Button>
                <Button variant="text" onClick={toggleMenu} color="inherit" style={buttonStyles} sx={{borderRadius: 5, marginRight:'80px', marginBottom:'10px'}}>
                  Doctor Login
                </Button>
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

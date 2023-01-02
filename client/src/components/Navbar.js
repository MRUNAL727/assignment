import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} onClick={()=> navigate('/')}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
               
              >
                <MenuIcon  />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link
                to="/login"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Button
                  key="login"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Login
                </Button>
              </Link>

              <Link
                to="/register"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Button
                  key="login"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Register
                </Button>
              </Link>
            </Box>
             <Link to='/cart' style={{textDecoration:'none', color:'inherit'}}>
              <ShoppingCartIcon />
             </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;

import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


function Navigation({handlePageChange}) {

  return (
    <AppBar position="static" sx={{ backgroundColor: '#004080' }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Car Dealership
      </Typography>
      <Button  color='inherit'
          onClick={() => handlePageChange("Home")} >
        Home
      </Button>
      <Button color='inherit'
          onClick={() => handlePageChange("Inventory")} >
        Inventory
      </Button>
      <Button color='inherit'
          onClick={() => handlePageChange("About")} >
        Financing 
      </Button>
    </Toolbar>
  </AppBar>

  );
}

export default Navigation;

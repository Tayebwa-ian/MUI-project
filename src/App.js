import * as React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container>
      <Navbar />
      <div id='detail'>
        <Outlet />
      </div>
    </Grid>
  );
}

export default App;

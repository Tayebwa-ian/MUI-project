import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from './Components/Header/Header';
import { useLocation } from 'react-router-dom'; 
import { Box } from '@mui/material';

function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    setTitle(parsedTitle);
  }, [location]);

  const bodyStyles = {
    content: {
      margin: '20px',
      alignItems: 'center',
    },
  }

  return (
    <Grid container>
      <Header title={title} />
      <Box sx={bodyStyles.content}>
        <Outlet />
      </Box>
    </Grid>
  );
}

export default App;
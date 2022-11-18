import { Box, Button, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import { AppBar } from './components/AppBar/AppBar';
import { PageWrapper } from './components/PageWrapper/PageWrapper';
import { SideNav } from './components/SideNav/SideNav';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box sx={{ display: 'flex' }}>
        <AppBar/>
        <SideNav/>
        <PageWrapper>
          <div>
              <Typography>
                React Application
              </Typography>
              <Button variant='contained'>button</Button>
          </div>
        </PageWrapper>
      </Box>
    </ThemeProvider>
  );
}

export default App;

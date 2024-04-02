import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Container maxWidth="false" disableGutters="true">
      <App />
    </Container>
  </React.StrictMode>
);

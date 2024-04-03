import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Container maxWidth="false" disableGutters style={{ height: '100vh', backgroundColor: '#1f1f1f' }}>
      <App />
    </Container>
  </React.StrictMode>
);

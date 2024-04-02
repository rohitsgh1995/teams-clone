import Box from '@mui/material/Box';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <Box sx={{ height: '100vh' }}>
      <Navbar />
      <Box>
        <Sidebar />
      </Box>
    </Box>
  );
}

export default App;

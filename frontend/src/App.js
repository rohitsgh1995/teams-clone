import Box from '@mui/material/Box';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import ChatList from './components/chat/ChatList';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Navbar />
      <Box sx={{ display: 'flex', height: '100%' }}>
        <Sidebar />
        <Box sx={{ display: 'flex', height: '100%' }}>
          <ChatList />
        </Box>
      </Box>
    </Box>
  );
}

export default App;

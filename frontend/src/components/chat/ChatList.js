import * as React from 'react';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FilterListIcon from '@mui/icons-material/FilterList';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

const ListItem = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 95%;
    color: white;
    gap: 10px;
    padding: 5px 10px;
    cursor: pointer;
    min-height: 50px;
    &:hover {
        border-width: 1px;
        border-style: solid;
        border-color: #3a3a3a;
        border-radius: 5px;
    }
`

const ChatList = () => {

    const renderChatItems = () => {
        const chatItems = [];
        for (let i = 0; i < 20; i++) {
            chatItems.push(
                <ListItem key={i}>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '12px' }}>
                        <Avatar sx={{ width: 32, height: 32, fontSize: '12px', color: '#156e4f', bgcolor: '#ccecdf' }}>RS</Avatar>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '0.9em' }}>Rohit Singh (You)</span>
                                <span style={{ fontSize: '0.9em' }}>1/1</span>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                <span style={{ color: '#c3c3c3', fontSize: '0.75em' }}>You: Hi, how are you?</span>
                            </Box>
                        </Box>
                    </Box>
                </ListItem>
            );
        }
        return chatItems;
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '280px', height: '100%' }}>
            <Box sx={{ display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '0 20px', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: '#0a0a0a', minHeight: '61px' }}>
                <Box sx={{ width: '60%' }}>
                    <span style={{ fontSize: '1.1em', fontWeight: '700' }}>Chat</span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '40%' }}>
                    <MoreHorizIcon fontSize='small' />
                    <FilterListIcon fontSize='small' />
                    <BorderColorIcon fontSize='small' />
                </Box>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: '100%', overflowX: 'hidden', overflowY: 'hidden' }}>
                <Box className="chat-items" sx={{ padding: '10px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', width: '100%', height: '775px', overflow: 'auto', paddingRight: '5px' }}>
                    {renderChatItems()}
                </Box>
            </Box>
            <Box sx={{ display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '0 20px', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: '#0a0a0a', minHeight: '61px' }}>
                <button style={{ width: '100%', margin: '10px 12px 10px 12px', border: '1px solid #666666', padding: '8px 12px',
                                    borderRadius: '4px', backgroundColor: '#292929', color: '#ffffff', cursor: 'pointer' }}>Chat with anyone</button>
            </Box>
        </Box>
    );
}

export default ChatList;
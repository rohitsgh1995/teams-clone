import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddBoxIcon from '@mui/icons-material/AddBox';

const SidebarItem = styled(Box)`
    width: 100%;
    height: 59px;
    color: #adadad;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    cursor: pointer;
    &:hover {
        background: #1a1a1a;
        color: #8e7def;
        border-left: 1px solid #8e7def;
    }
    .MuiTypography-caption {
        font-size: 0.6rem;
    }
`

const Sidebar = () => {
    return (
        <Box sx={{ background: '#0a0a0a', width: 68, height: '100vh' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'top', gap: '0.3rem', height: '100%' }}>
                <SidebarItem>
                    <NotificationsNoneOutlinedIcon />
                    <Typography variant="caption">Activity</Typography>
                </SidebarItem>
                <SidebarItem>
                    <ChatRoundedIcon />
                    <Typography variant="caption">Chat</Typography>
                </SidebarItem>
                <SidebarItem>
                    <Groups2RoundedIcon />
                    <Typography variant="caption">Teams</Typography>
                </SidebarItem>
                <SidebarItem>
                    <CalendarMonthIcon />
                    <Typography variant="caption">Calendar</Typography>
                </SidebarItem>
                <SidebarItem>
                    <CallIcon />
                    <Typography variant="caption">Calls</Typography>
                </SidebarItem>
                <SidebarItem>
                    <CloudQueueIcon />
                    <Typography variant="caption">One Drive</Typography>
                </SidebarItem>
                <SidebarItem>
                    <SignalCellularAltIcon />
                    <Typography variant="caption">Power BI</Typography>
                </SidebarItem>
                <SidebarItem>
                    <MoreHorizIcon />
                </SidebarItem>
                <SidebarItem>
                    <AddBoxIcon />
                    <Typography variant="caption">Apps</Typography>
                </SidebarItem>
            </Box>
        </Box>
    )
}

export default Sidebar;
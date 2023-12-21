"use client"
import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
import style from './header.module.css';
import WidgetsIcon from '@mui/icons-material/Widgets';  
import Deshboards from '../component/deshboard';
import Testing from '../component/testing';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Avatar, Popover, Typography } from '@mui/material';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import CoffeeIcon from '@mui/icons-material/Coffee';
import WineBarIcon from '@mui/icons-material/WineBar';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FeedIcon from '@mui/icons-material/Feed';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function page() {
  const [open, setOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('Dashboard');
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    // Add any other logic you need when a tab is selected
  };

  const hangleChangeDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const opens = Boolean(anchorEl);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className={style.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >

            <WidgetsIcon />
          </IconButton>

          <div>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </div>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <div className={isDarkMode ? style.darkMode : ''}>
              <FormControlLabel
                control={<Switch checked={isDarkMode} onChange={hangleChangeDarkMode} />}
                label=""
              />
            </div>


            <IconButton
              size="large"
              color="inherit"
              onClick={handlePopoverOpen}
            >
              <NotificationsIcon />
            </IconButton>

            <Popover
            className={style.demm}
              open={opens}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography sx={{ p: 2 }}>Notification</Typography>
              <Typography className={style.notificationText}>
                <CoffeeIcon className={style.notificationIcon} />
                You are just a step away from earning your Bourbon Certificate
              </Typography>

              <Typography className={style.notificationText}>
                <WineBarIcon className={style.notificationIcon} />
                Explore this week's new cocktail recipe & enhance your mixology skills!
              </Typography>

              <Typography className={style.notificationText}>
                <OpenInBrowserIcon className={style.notificationIcon} />
                Time to restock! Check your inventory before the weekend rush.
              </Typography>

              <Typography className={style.notificationText}>
                <LocalBarIcon className={style.notificationIcon} />
                Important: Check the latest health and safety guidelines for bartenders.
              </Typography>

              <Typography className={style.notificationText}>
                <CheckCircleOutlineIcon className={style.notificationIcon} />
                Your weekly customer feedback summary is now available. Take a look!
              </Typography>

              <Typography className={style.notificationText}>
                <FeedIcon className={style.notificationIcon} />
                Don't forget to complete your bar closing side-work checklist!
              </Typography>
            </Popover>

            <IconButton sx={{ p: 0, marginLeft: 1 }}>
              <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtmuKwjrnxncWjaeLRqc52s4QxuhjAd-c6Jdgon2N6A&s" />
            </IconButton>
            <Typography variant="body1" sx={{ marginLeft: 1, marginTop: 1 }}>
              Aria Bennett
            </Typography>

          </Box>
        </Toolbar>
      </AppBar>


      <Drawer variant="permanent" open={open}>
        <DrawerHeader className={style.headerLogo}>
          <div className={style.logoImg}>
            <img src="/logo.svg" alt="Your Image Alt Text" style={{ width: '100%', height: '100%' }} />
          </div>
          <IconButton onClick={handleDrawerClose}>
            <WidgetsIcon className={style.LogoColor} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {['Dashboard', 'Specs', 'Library', 'Chechlists', 'Marriott', 'Setting', 'Logout'].map((text, index) => ( */}
          <ListItem className={style.listItemParent}>
            <ListItemButton
              className={selectedTab === 'Dashboard' ? `${style.SelectedTab}` : ''}
              onClick={() => handleTabClick('Dashboard')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                className={selectedTab === 'Dashboard' ? `${style.SelectedTab}` : ''}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <GridViewIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem className={style.listItemParent}>
            <ListItemButton
              className={selectedTab === 'Specs' ? `${style.SelectedTab}` : ''}
              onClick={() => handleTabClick('Specs')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                className={selectedTab === 'Specs' ? `${style.SelectedTab}` : ''}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LocalBarIcon />
              </ListItemIcon>
              <ListItemText primary="Specs" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          {/* <ListItem className={style.listItemParent}>
            <ListItemButton
              className={selectedTab === 'Cocktails' ? `${style.SelectedTab}` : ''}
              onClick={() => handleTabClick('Cocktails')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                className={selectedTab === 'Cocktails' ? `${style.SelectedTab}` : ''}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LocalBarIcon />
              </ListItemIcon>
              <ListItemText primary="Cocktails" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem className={style.listItemParent}>
            <ListItemButton
              className={selectedTab === 'Spirits' ? `${style.SelectedTab}` : ''}
              onClick={() => handleTabClick('Spirits')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                className={selectedTab === 'Spirits' ? `${style.SelectedTab}` : ''}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LocalBarIcon />
              </ListItemIcon>
              <ListItemText primary="Spirits" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem className={style.listItemParent}>
            <ListItemButton
              className={selectedTab === 'Wine' ? `${style.SelectedTab}` : ''}
              onClick={() => handleTabClick('Wine')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                className={selectedTab === 'Wine' ? `${style.SelectedTab}` : ''}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LocalBarIcon />
              </ListItemIcon>
              <ListItemText primary="Wine" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem> */}

        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {selectedTab == "Dashboard" && <Deshboards />}
        {selectedTab == "Specs" && <Testing />}
      </Box>
    </Box>
  );
}
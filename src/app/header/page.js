"use client"
// Mui library
import React, { useState } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import FeedIcon from '@mui/icons-material/Feed';
import IconButton from '@mui/material/IconButton';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CssBaseline from '@mui/material/CssBaseline';
import SearchIcon from '@mui/icons-material/Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ListItemText from '@mui/material/ListItemText';
import WineBarIcon from '@mui/icons-material/WineBar';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import GridViewIcon from '@mui/icons-material/GridView';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ListItemButton from '@mui/material/ListItemButton';
import { Avatar, Popover, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

// custom component 
import style from './header.module.css';
import Library from '../library/page';
import Courses from '../library/courses/page';
import Flashcards from '../library/flashcards/page';
import Quizzes from '../library/quizzes/page';
import Spirits from '../specs/spirits/page';
import Cocktails from '../specs/cocktails/page';
import Specs from '../specs/page';
import Dashboard from '../dashboard/page';
import Beer from '../specs/beer/page';
import Low from '../specs/low/page';
import Wine from '../specs/wines/page';
import Setting from '../setting/page';
import Marriott from '../marriott/page';
import Checklist from '../checklist/page';

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
  const [isCollapse, setIsCollapse] = useState(false);
  const [isCollapselibrary, setIsCollapseLibrary] = useState(false);



  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  const handleCollapseLibrary = () => {
    setIsCollapseLibrary(!isCollapselibrary);
  };

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
    <>
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

            <div style={{ marginRight: 'auto', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search"
                className={style.SearchInput}
              />
              <SearchIcon className={style.SearchIcon} />
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
                className={`${selectedTab === 'Dashboard' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                onClick={() => handleTabClick('Dashboard')}
                sx={{ justifyContent: open ? 'initial' : 'center' }}
              >
                <ListItemIcon
                  className={`${selectedTab === 'Dashboard' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                  sx={{ mr: open ? 3 : 'auto' }}
                >
                  <GridViewIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem className={style.listItemParent} onClick={() => handleCollapse()}>
              <ListItemButton
                className={`${selectedTab === 'Specs' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                onClick={() => handleTabClick('Specs')}
                sx={{ justifyContent: open ? 'initial' : 'center' }}
              >
                <ListItemIcon
                  className={`${selectedTab === 'Specs' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                  sx={{ mr: open ? 3 : 'auto' }}
                >
                  <LocalBarIcon />
                </ListItemIcon>
                <ListItemText primary="Specs" sx={{ opacity: open ? 1 : 0 }} />
                {open ? (isCollapse ? <ExpandLess /> : <ExpandMore />) : ''}
              </ListItemButton>
            </ListItem>

            {open ? <ListItem>
              <Collapse in={isCollapse} timeout="auto">
                <ListItem className={style.listItemParent}>
                  <ListItemButton
                    className={`${selectedTab === 'Cocktails' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                    onClick={() => handleTabClick('Cocktails')}
                    sx={{ justifyContent: open ? 'initial' : 'center' }}
                  >
                    <ListItemIcon
                      className={`${selectedTab === 'Cocktails' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                      sx={{ mr: open ? 3 : 'auto' }}
                    >
                      <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cocktails" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>

                <ListItem className={style.listItemParent}>
                  <ListItemButton
                    className={`${selectedTab === 'Spirits' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                    onClick={() => handleTabClick('Spirits')}
                    sx={{ justifyContent: open ? 'initial' : 'center' }}
                  >
                    <ListItemIcon
                      className={`${selectedTab === 'Spirits' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                      sx={{ mr: open ? 3 : 'auto' }}
                    >
                      <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Spirits" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>

                <ListItem className={style.listItemParent}>
                  <ListItemButton
                    className={`${selectedTab === 'Wine' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                    onClick={() => handleTabClick('Wine')}
                    sx={{ justifyContent: open ? 'initial' : 'center' }}
                  >
                    <ListItemIcon
                      className={`${selectedTab === 'Wine' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                      sx={{ mr: open ? 3 : 'auto' }}
                    >
                      <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Wine" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>

                <ListItem className={style.listItemParent}>
                  <ListItemButton
                    className={`${selectedTab === 'Beer' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                    onClick={() => handleTabClick('Beer')}
                    sx={{ justifyContent: open ? 'initial' : 'center' }}
                  >
                    <ListItemIcon
                      className={`${selectedTab === 'Beer' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                      sx={{ mr: open ? 3 : 'auto' }}
                    >
                      <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Beer" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>

                <ListItem className={style.listItemParent}>
                  <ListItemButton
                    className={`${selectedTab === 'Low' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                    onClick={() => handleTabClick('Low')}
                    sx={{ justifyContent: open ? 'initial' : 'center' }}
                  >
                    <ListItemIcon
                      className={`${selectedTab === 'Low' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                      sx={{ mr: open ? 3 : 'auto' }}
                    >
                      <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Low" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            </ListItem> : ''}

            <ListItem className={style.listItemParent} onClick={() => handleCollapseLibrary()}>
              <ListItemButton
                className={`${selectedTab === 'Library' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                onClick={() => handleTabClick('Library')}
                sx={{ justifyContent: open ? 'initial' : 'center' }}
              >
                <ListItemIcon
                  className={`${selectedTab === 'Library' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                  sx={{ mr: open ? 3 : 'auto' }}
                >
                  <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="Library" sx={{ opacity: open ? 1 : 0 }} />
                {open ? (isCollapselibrary ? <ExpandLess /> : <ExpandMore />) : ''}
              </ListItemButton>
            </ListItem>

            {open ? <ListItem>
              <Collapse in={isCollapselibrary} timeout="auto">
                <ListItem className={style.listItemParent}>
                  <ListItemButton
                    className={`${selectedTab === 'Courses' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                    onClick={() => handleTabClick('Courses')}
                    sx={{ justifyContent: open ? 'initial' : 'center' }}
                  >
                    <ListItemIcon
                      className={`${selectedTab === 'Courses' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                      sx={{ mr: open ? 3 : 'auto' }}
                    >
                      <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Courses" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>

                <ListItem className={style.listItemParent}>
                  <ListItemButton
                    className={`${selectedTab === 'Flashcards' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                    onClick={() => handleTabClick('Flashcards')}
                    sx={{ justifyContent: open ? 'initial' : 'center' }}
                  >
                    <ListItemIcon
                      className={`${selectedTab === 'Flashcards' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                      sx={{ mr: open ? 3 : 'auto' }}
                    >
                      <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Flashcards" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>

                <ListItem className={style.listItemParent}>
                  <ListItemButton
                    className={`${selectedTab === 'Quizzes' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                    onClick={() => handleTabClick('Quizzes')}
                    sx={{ justifyContent: open ? 'initial' : 'center' }}
                  >
                    <ListItemIcon
                      className={`${selectedTab === 'Quizzes' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                      sx={{ mr: open ? 3 : 'auto' }}
                    >
                      <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quizzes" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>

              </Collapse>
            </ListItem> : ''}

            <ListItem className={style.listItemParent}>
              <ListItemButton
                className={`${selectedTab === 'Checklist' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                onClick={() => handleTabClick('Checklist')}
                sx={{ justifyContent: open ? 'initial' : 'center' }}
              >
                <ListItemIcon
                  className={`${selectedTab === 'Checklist' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                  sx={{ mr: open ? 3 : 'auto' }}
                >
                  <FactCheckIcon />
                </ListItemIcon>
                <ListItemText primary="Checklist" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem className={style.listItemParent}>
              <ListItemButton
                className={`${selectedTab === 'Marriott' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                onClick={() => handleTabClick('Marriott')}
                sx={{ justifyContent: open ? 'initial' : 'center' }}
              >
                <ListItemIcon
                  className={`${selectedTab === 'Marriott' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                  sx={{ mr: open ? 3 : 'auto' }}
                >
                  <LocationCityIcon />
                </ListItemIcon>
                <ListItemText primary="Marriott" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem className={style.listItemParent}>
              <ListItemButton
                className={`${selectedTab === 'Setting' ? style.SelectedTab : style.listItemChild} ${style.ListButton}`}
                onClick={() => handleTabClick('Setting')}
                sx={{ justifyContent: open ? 'initial' : 'center' }}
              >
                <ListItemIcon
                  className={`${selectedTab === 'Setting' ? `${style.SelectedTab}` : ''} ${style.iconStyle}`}
                  sx={{ mr: open ? 3 : 'auto' }}
                >
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Setting" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

          </List>

        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {selectedTab == "Dashboard" && <Dashboard />}
          {selectedTab == "Specs" && <Specs />}
          {selectedTab == "Cocktails" && <Cocktails />}
          {selectedTab == "Spirits" && <Spirits />}
          {selectedTab == "Wine" && <Wine />}
          {selectedTab == "Beer" && <Beer />}
          {selectedTab == "Low" && <Low />}
          {selectedTab == "Library" && <Library />}
          {selectedTab == "Courses" && <Courses />}
          {selectedTab == "Flashcards" && <Flashcards />}
          {selectedTab == "Quizzes" && <Quizzes />}
          {selectedTab == "Checklist" && <Checklist />}
          {selectedTab == "Marriott" && <Marriott />}
          {selectedTab == "Setting" && <Setting />}
        </Box>
      </Box>
    </>
  );
}
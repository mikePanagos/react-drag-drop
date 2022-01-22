// import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

import {Menu as MenuIcon} from '@mui/icons-material/';


import { useSelector, useDispatch } from 'react-redux';
import { openClose } from '../store/features/nav-slice';

const drawerWidth = 240;
const MyAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor: theme.palette.alert.dark,
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

const Header = (props) => {

    const open = useSelector((state) => state.navagation.open);
    const dispatch = useDispatch();



    return (

        <MyAppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => dispatch(openClose())}
                edge="start"
                sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                }}
                >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                Mini variant drawer
            </Typography>
        </Toolbar>
        </MyAppBar >
    );

};

export default Header;
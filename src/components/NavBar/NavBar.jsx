import React, {useState} from 'react';
import {
    AppBar,
    fade,
    IconButton,
    InputBase,
    ListItem, ListItemIcon, ListItemText,
    makeStyles, SwipeableDrawer,
    Toolbar,
    Typography
} from "@material-ui/core";
import {Bookmark, Inbox, Mail, Search, ThumbUp} from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    offset: theme.mixins.toolbar,

    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    link: {
        textDecoration: "none",
        color: "black",
    }
}));

const NavBar = (props) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    let location = useLocation()

    const navLinks = [
        {icon: <ThumbUp/>, title: "Popular", path: "/"},
        {icon: <Bookmark/>, title: "Saved", path: "/favorites"}
    ]
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => setDrawerOpen(true)}
                        aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Top Movies
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
            <SwipeableDrawer anchor={"left"} open={drawerOpen} onClose={() => setDrawerOpen(false)} onOpen={() => setDrawerOpen(true)}>
                {
                    navLinks.map(link => {
                        return (
                            <NavLink to={link.path} className={classes.link}>
                                <ListItem className={classes.list} button selected={link.path === location.pathname} onClick={() => setDrawerOpen(false)}>
                                    <ListItemIcon>{link.icon}</ListItemIcon>
                                    <ListItemText primary={link.title}/>
                                </ListItem>
                            </NavLink>

                        )
                    })
                }
            </SwipeableDrawer>
        </div>

    )
}

export default NavBar;
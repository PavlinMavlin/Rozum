import React from 'react';
import {AppBar, Toolbar, Typography,} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        position: 'relative',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    linearProgress: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Hospital Department
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    );
};
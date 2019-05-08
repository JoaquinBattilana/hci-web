import React from 'react';
import styles from './styles.module.scss';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


function TopBar() {
    return (
        <AppBar position="static">
            <div className={styles.topbar}>
                <Icon>house_icon</Icon>
                <Typography>Welcome Home</Typography>
            </div>
        </AppBar>
    );
}

export default TopBar;
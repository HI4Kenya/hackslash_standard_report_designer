import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit">
                                Standard Report Designer: Customization
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>

        );
    }
}

export default Header;
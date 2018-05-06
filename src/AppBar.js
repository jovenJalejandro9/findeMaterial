import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { orange500, fullWhite, white } from 'material-ui/styles/colors';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  whiteBack: {
    color: white,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    textColor: white
  },
  errorStyle: {
    color: orange500,
  },
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleLogOut = () => {
    this.setState({ auth: false });
  };

  handleLogin = () => {
    this.setState({ anchorEl: null });
    this.setState({ auth: true })
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;

    console.log(this.props)
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <TextField
      hintText="Styled Hint Text"
      hintStyle={styles.errorStyle}
    /><br />
            <Typography variant="title" color="inherit" className={classes.flex}>
              kori-NGO
            </Typography>
            {auth && (
              <div>

                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                >

                  <AccountCircle className={classes.whiteBack} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleLogOut}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
            {!auth && (

              <div>
                <TextField className={classes.textNick}
                  color={fullWhite}
                  backgroundColor={fullWhite}
                  hoverColor="#8AA62F"
                  id="name"
                  label="Name"
                  value={this.state.name}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                />
                <TextField
                  id="password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />


                <Button color="inherit" onClick={this.handleLogin}>Login</Button>
              </div>
            )}

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
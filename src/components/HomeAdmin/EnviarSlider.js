import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
  appBar: {
    position: 'relative',
    boxShadow: theme.shadows[1],
  },
  flex: {
    flex: 1,
  },
})

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class EnviarSlider extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.open}
          onClose={this.props.fecharEnviarSlider}
          TransitionComponent={Transition}
        >
          <AppBar color="primary" className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.props.fecharEnviarSlider} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Banners da tela de inicio
              </Typography>
            </Toolbar>
          </AppBar>
        </Dialog>
      </div>
    );
  }
}

EnviarSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnviarSlider);

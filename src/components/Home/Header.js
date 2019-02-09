import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
//import Logo from '../../sources/logo_bonsai.png'
import Slider from './SliderBS.js'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: '#000'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 10,
  },
  paddingLogo: {
    padding: '5px'
  }
})

function ButtonAppBar(props) {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }} >
      <Slider />
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
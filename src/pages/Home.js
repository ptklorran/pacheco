import React from 'react';

import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Content from '../components/Home/Content'
import Footer from '../components/Home/Footer'

import Slider from '../components/Home/SliderBS'

import { firebase } from '../services/Firebase'

//import Logo from '../sources/logo_bonsai.png'

const styles = theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#111111'
  },
  breakPoints: {
    position: 'absolute',
    minHeight: '140vh',
    [theme.breakpoints.up('lg')]: {
      top: 100,
      paddingTop: 380,
      backgroundImage: 'linear-gradient(rgba(0,0,0,0) 1%, rgba(1,1,1) 30%, #111111 100%, #111111 10%)'
    },
    [theme.breakpoints.down('md')]: {
      top: 100,
      paddingTop: 200,
      backgroundImage: 'linear-gradient(rgba(0,0,0,0) 1%, rgba(1,1,1) 30%, #111111 100%, #111111 10%)'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 130,
      backgroundImage: 'linear-gradient(rgba(0,0,0,0) 1%, rgba(1,1,1) 30%, #111111 100%, #111111 10%)'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
      backgroundColor: 'linear-gradient(rgba(0,0,0,0) 1%, rgba(1,1,1) 30%, #111111 100%, #111111 10%)'

    },
  }
})

class Home extends React.Component {
  state = {
    logado: null,
    lista: []
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.setState({ logado: true })
        } else {
          this.setState({ logado: false })
        }
      }
    )
  }

  render() {

    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid>
          <Slider />
        </Grid>
        <div className={classes.breakPoints}>
          <Content />
          <Footer />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home)

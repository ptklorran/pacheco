import React from 'react';

import { withStyles } from '@material-ui/core/styles'
import { Grid, IconButton } from '@material-ui/core'
import { Camera } from '@material-ui/icons'

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
    minHeight: '100vh',
    paddingBottom: 0,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      top: 100,
      paddingTop: 380,
      backgroundImage: 'linear-gradient(rgba(0,0,0,0) 1%, rgba(1,1,1) 40%, #1f1c18 100%, #1f1c18 10%)'
    },
    [theme.breakpoints.down('md')]: {
      top: 100,
      paddingTop: 200,
      backgroundImage: 'linear-gradient(rgba(0,0,0,0) 1%, rgba(1,1,1) 30%, #1f1c18 100%, #1f1c18 10%)'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 130,
      backgroundImage: 'linear-gradient(rgba(0,0,0,0) 1%, rgba(1,1,1) 30%, #1f1c18 100%, #1f1c18 10%)'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
      backgroundColor: 'linear-gradient(rgba(0,0,0,0) 1%, rgba(1,1,1) 30%, #1f1c18 100%, #1f1c18 10%)'

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
          <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', zIndex: 1000, top: 0, height: '40px', width: '100%', backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0))' }}>
            <div style={{ flex: 1 }} />
            <IconButton style={{ marginRight: 8 }} component="a" href="/loginvalidator" >
              <Camera style={{ color: 'white', margin: 0, padding: 0 }} />
            </IconButton>
          </div>
          
        </Grid>
        <div className={classes.breakPoints}>
          <Content />
          <Footer/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home)

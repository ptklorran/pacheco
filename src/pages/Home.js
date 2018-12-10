import React from 'react';

import { firebase } from '../services/Firebase'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'

import Header from '../components/Home/Header'
import Content from '../components/Home/Content'
import SideContent from '../components/Home/SideContent'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFF'
  },
  Destaque: {
    height: '400px',
    backgroundColor: '#555'
  }
})

const criausuario = () => {
  firebase.auth().createUserWithEmailAndPassword('patrick-lorran@gmail.com', '123456')
}

function Home(props) {
  const { classes } = props

  return(
    <div className={classes.root}>
      <Button onClick={criausuario}></Button>
      <Grid className={classes.Destaque} item xs={12}>
        <Header />
      </Grid>

      <Grid>
        <SideContent />
        <Content />
      </Grid>

    </div>
  )
}

export default withStyles(styles)(Home)

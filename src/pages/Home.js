import React from 'react';

import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

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


function Home(props) {
  const { classes } = props

  return(
    <div className={classes.root}>
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

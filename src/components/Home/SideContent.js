import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const styles = theme => ({
    root: {
        flexGrow: 1
    }
})

const SideContent = props => {

    const { classes } = props

    return(
        <div className={classes.root}>
            <Grid container sm={3}>
                <Grid item sm={3}>
                    Oi
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(SideContent)

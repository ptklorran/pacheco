import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const styles = theme => ({
    root: {
        flexGrow: 1
    }
})

const PainelAdmin = props => {
    const { classes } = props

    return(
        <div>
            <Grid container xs={12} sm={12}>
                <Grid item xs={12} sm={12}>

                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(PainelAdmin)
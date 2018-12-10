import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import Cardi from '../Cardi'

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fontRecente: {
        padding: '5px',
        paddingBottom: '1px'
    }
})

const Content = props => {

    const { classes } = props

    return(
        <div>
            <div className={classes.root}>
                <Grid container xs={12} sm={9}>
                    <Typography variant="h6" className={classes.fontRecente}>
                        Recentes
                    </Typography>
                </Grid>
            </div>
            <div className={classes.root}>
                <Grid container xs={12} sm={9}>
                    <Cardi />
                    <Cardi />
                    <Cardi />
                    <Cardi />
                </Grid>
            </div>
        </div>
    )
}

export default withStyles(styles)(Content)
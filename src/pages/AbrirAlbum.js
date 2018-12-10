import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Button } from '@material-ui/core'

const styles = theme => ({
    root: {
        flexGrow: 1
    }
})

const AbrirAlbum = props => {
    const { classes } = props

    return(
        <div>
            Teste
        </div>
    )
}

export default withStyles(styles)(AbrirAlbum)
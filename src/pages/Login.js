import React from 'react'
import './Login.css'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Button, TextField, Paper, Typography } from '@material-ui/core'

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundImage: 'linear-gradient(to bottom, #43cea2, #185a9d)'
    },
    altura: {
        height: '720px',
        flexDirection: 'column'
    },
    fieldEmail: {
        margin: '4px',
        marginTop: '10px'
    },
    fieldSenha: {
        margin: '4px',
        marginBottom: '15px'
    },
    Paper: {
        width: '300px',
        height: '200px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
    }
})

class Login extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid className={classes.altura} container xs={12} sm={12} alignItems="center" justify="center">
                    <Paper className={classes.Paper}>
                        <Grid container xs={12} sm={12} alignItems="center" justify="center">
                            <Typography variant="h6" >Administração</Typography>
                            <TextField className={classes.fieldEmail} variant="outlined" label="Email" />
                            <TextField className={classes.fieldSenha} variant="outlined" label="Senha" />
                            <Button to="/homeadmin" variant="outlined">Entrar</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Login)
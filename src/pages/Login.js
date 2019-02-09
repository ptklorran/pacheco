import React from 'react'
import './Login.css'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Button, TextField, Paper, Typography, CircularProgress } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { firebase } from '../services/Firebase'

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        backgroundImage: 'linear-gradient(45deg, #ffc107 30%, #fff 90%)'
    },
    altura: {
        height: '100vh',
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
        height: '280px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    btn: {
        background: 'linear-gradient(45deg, #ffc107 30%, #ff5722 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: '5px'
    },
    btn2: {
        background: 'linear-gradient(-45deg, #ffc107 30%, #ff5722 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: '5px'
    },
})


class Login extends React.Component {
    state = {
        email: '',
        password: '',
        erro: null,
        charging: false
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(
            (user) => {
                if (user) {
                    this.props.history.push('/homeadmin')
                }
            }
        )
    }

    render() {
        const { classes } = this.props

        const OnPressLogin = () => {
            // essa função é ativada depois do usua´rio clicar no botão de login
            if(this.state.charging) {
                return <CircularProgress />
            } else {
                return <div />
            }
        }

        const Erro = () => {
            if (this.state.erro != null) {
                return <Typography> {this.state.erro} </Typography>
            } else {
                return <Typography></Typography>
            }
        }

        const login = () => {
            this.setState({ erro: '' })
            const { email, password } = this.state
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then( this.setState({ charging: true }) )    
                .then(
                    (user) => {
                        if(user) {
                            this.props.history.push('/homeadmin')
                        }
                    }
                )
                .catch(
                    e => this.setState({charging: false, erro: e.message })
                )
        }

        const LoginButton = () => {
            if (this.state.isAuth) {
                return <Redirect to="/homeadmin" />
            } else {
                return <Button className={classes.btn} onClick={ login }>entrar</Button>
            }
        }

        return (
            <div className={classes.root}>
                <Grid className={classes.altura} container alignItems="center" justify="center">
                    <Paper className={classes.Paper}>
                        <Grid container justify="center">
                            <Typography variant="h6" >Administração <OnPressLogin /></Typography>
                            <Erro />
                            <TextField className={classes.fieldEmail} variant="outlined" value={this.state.email} onChange={ e => { this.setState({ email: e.target.value })} } type="email" label="Email" />
                            <TextField className={classes.fieldSenha} variant="outlined" value={this.state.password} onKeyDown={e => { if(e.keyCode === 13) { login() } }} onChange={ e => { this.setState({ password: e.target.value }) }} type="password" label="Senha" />
                            <div>
                                <Button className={classes.btn2} href="/" >Voltar</Button>
                                <LoginButton />
                            </div> 
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Login)
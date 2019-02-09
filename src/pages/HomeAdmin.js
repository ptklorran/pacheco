import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'

import { auth } from '../services/Firebase'

//importação dos componentes da HomeAdmin, path: src/components/HomeAdmin/*
import Principal from '../components/HomeAdmin/Principal'
import NovoUsuario from '../components/HomeAdmin/NovoUsuario'
import EnviarSlider from '../components/HomeAdmin/EnviarSlider'

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    position: 'absolute',
    backgroundImage: 'linear-gradient(90deg, #0f0c29, #302b63, #24243e )'
  },
  options: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

class HomeAdmin extends Component {
  state = {
    openEnviarSlider: false,
    openNovoUsuario: false,
    logado: false
  }

  componentDidMount() {
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.setState({logado: true, email: user.email})
        } else {
          this.props.history.push('/login')
        }
      }
    )
  }

  render() {

    const { classes } = this.props
    const { email } = this.state

    const fecharEnviarSlider = () => {
      this.setState({ openEnviarSlider: false })
    }

    const fecharNovoUsuario = () => {
      this.setState({ openNovoUsuario: false })
    }

    return (
      <div className={classes.root}>
        <Grid>
          <div className={classes.options}>
            <Button onClick={() => {}} style={{ color: '#fff' }}>Usuário: {email}</Button>
          </div>
          <div className={classes.options}>
            <Button onClick={() => this.props.history.push('/')} style={{ color: '#fff' }}>Início</Button>
            <Button onClick={() => this.setState({ openEnviarSlider: true })} style={{ color: '#fff' }}>Banners</Button>
            <Button onClick={() => this.setState({ openAlbuns: true })} style={{ color: '#fff' }}>Albuns</Button>
            <Button onClick={() => this.setState({ openNovoUsuario: true })} style={{ color: '#fff' }}>Usuários</Button>
            <Button onClick={() => {auth.signOut(); this.props.history.push('/')}} style={{ color: '#fff' }}>Sair</Button>
          </div>
        </Grid>
        <Grid>
          <Principal />
        </Grid>

        <EnviarSlider open={this.state.openEnviarSlider} fecharEnviarSlider={fecharEnviarSlider} />
        <NovoUsuario open={this.state.openNovoUsuario} fecharNovoUsuario={fecharNovoUsuario} />
      </div>
    )
  }
}

export default withStyles(styles)(HomeAdmin)
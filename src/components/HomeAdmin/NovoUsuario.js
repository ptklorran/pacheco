import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { auth } from '../../services/Firebase'

const styles = theme => ({
  appBar: {
    position: 'relative',
    boxShadow: theme.shadows[1],
  },
  flex: {
    flex: 1,
  },
})

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class NovoUsuario extends React.Component {
  state = {
    novousuario: {
        email: '',
        senha: ''
    },
    sucesso: false,
    error: false,
    errorMessage: ''
  }

  render() {
    const { classes } = this.props;

    const cadastrarNovoUsuario = () => {
        auth.createUserWithEmailAndPassword(this.state.novousuario.email, this.state.novousuario.senha).then(
            (user) => {
                this.setState({ sucesso: true })
            }
        ).catch(
            (error) => {
                this.setState({ error: true, errorMessage: error.message })
            }
        )
    }

    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.open}
          onClose={this.props.fecharNovoUsuario}
          TransitionComponent={Transition}
        >
          <AppBar color="primary" className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.props.fecharNovoUsuario} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Novo Usuário
              </Typography>
            </Toolbar>
          </AppBar>
            <Grid>
                <div>
                    <TextField variant="outlined" style={{ margin: 8 }} label="Email" placeholder="Email" onChange={(e) => this.setState({novousuario: {email: e.target.value}})} type="email" value={this.state.novousuario.email}/>
                    <TextField variant="outlined" style={{ margin: 8 }} label="Senha" placeholder="Senha" onChange={(e) => this.setState({novousuario: {senha: e.target.value}})} type="password" value={this.state.novousuario.senha}/>
                    <Button style={{ margin: 8 }} onClick={cadastrarNovoUsuario} >Cadastrar o Novo Usuário</Button>
                </div>
                
            </Grid>
        </Dialog>
      </div>
    );
  }
}

NovoUsuario.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NovoUsuario);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Grid, TextField, Divider, Button, LinearProgress, Typography } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import FileUploader from 'react-firebase-file-uploader'

import Cardi from './Cardi'
import { storage } from '../services/Firebase'

import Moment from 'moment'   
import 'moment/locale/pt-br'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  passo1:{
    display: 'flex'
  },
  passos: {
    flexGrow: 1,
    flexDirection: 'column',
    padding: theme.spacing.unit,
    background: '#FFF',
    width: '100%'
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  bottonOptions: {
    display: 'flex',
    justifyContent: 'center',
    background: '#fff',
    paddingBottom: '10px'
  },
  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  conteudo: {
    flexGrow: 1,
    width: '1000px',
    margin: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit
  }
});

function getSteps() {
  return ['Informe Algumas Informações do Novo Álbum', 'Importe as Fotos...', 'Sucesso!!!'];
}

//var DataAtual = Moment().locale('pt-br').format("LLLL")
class UparAlbum extends React.Component {
  state = {
    activeStep: 0,
    //upado para criar o Album
    nomeAlbum: '',
    descricaoAlbum: '',
    capaFile: '',
    capaURL: 'https://i2.wp.com/ovnihoje.com/wp-content/uploads/2018/07/consciencia-universo.jpg?resize=556%2C313',
    criadoEm: Moment().locale('pt-br').format('ll'),
    hashtag: '',
    fotosDoAlbum: [],
    //FileUploader a partir daqui
    progress: 0,
    isUploading: false,
    filesToStore: null
  };
  
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };
 
  render() {

    const handleUploadSuccessFiles = filename => {
      this.setState({ progress: 100, isUploading: false });
      storage.ref("images").child(`${nomeAlbum}`).getDownloadURL().then(url => this.setState({teste: url}))
      console.log(this.state.teste)
    };

    const FilesUploader = () => {
      return (
        <FileUploader 
          accept="image/*"
          multiple
          storageRef={storage.ref('images').child(`${nomeAlbum}`).child("fotos")}
          onUploadStart={handleUploadStart}
          onUploadError={handleUploadError}
          onUploadSuccess={handleUploadSuccessFiles}
          onProgress={handleProgress}
          onChange={customOnChangeHandler} 
          ref={instance => { this.fileUploader = instance; } }  
        />
      )
    }

    const handleInputNomeAlbum = e => {
      const nomeAlbum = e.target.value
      this.setState({ nomeAlbum })
    }

    const handleInputDescricaoAlbum = e => {
      const descricaoAlbum = e.target.value
      this.setState({ descricaoAlbum })
    }

    const handleInputHashtag = e => {
      const hashtag = e.target.value
      this.setState({ hashtag })
    }

    const handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    const handleProgress = progress => this.setState({ progress });

    const Progresso = () => {
      if (this.state.isUploading) {
        return <LinearProgress variant="determinate" value={this.state.progress}/>
      } else {
        return null
      }
      
    }

    const handleUploadError = () => error => 
    {
      this.setState({ isUploading: false });
      console.error(error);
    };

    const handleUploadSuccess = (filename) => {
    this.setState({ capaFile: filename, progress: 100 });
      storage
      .ref(`images/${this.state.nomeAlbum}`)
      .child(filename).getDownloadURL().then(url => this.setState({ capaURL: url }))
    }

    //mostra os nomes dos arquivos no passo 2 ao selecionar arquivos
    const MostraArquivos = () => {
      if (filesToStore !== null) {
        return filesToStore.map(item => <li key={item.url}> {item.name} </li> )
      } else {
        return null
      }
    }

    const customOnChangeHandler = (event) => {
      const { target: { files } } = event;
      const teste = Array.from(files)
      this.setState({ filesToStore: Array.from(files) })
      console.log('ver', teste)
    }

    const startUploadManually = () => {
      
    }

    function getStepContent(stepIndex) {
      switch (stepIndex) {
        case 0:
//Passo 1
          return (
            <Grid className={classes.passos}>
                <div>
                  <TextField style={{ margin: 8, width: '100%' }} variant="outlined" onChange={handleInputNomeAlbum} value={nomeAlbum} label="Nome do Album"/>
                </div>
                <div>
                  <TextField variant="outlined" style={{ margin: 8, width: '100%'  }} onChange={handleInputDescricaoAlbum} value={descricaoAlbum} label="Descrição"/>
                </div>
                <div>
                  <TextField variant="outlined" style={{ margin: 8, width: '100%' }} label="Data de Criação" value={criadoEm} />
                  <TextField variant="outlined" style={{ margin: 8, width: '100%' }} label="Hashtag" onChange={handleInputHashtag} value={hashtag} InputProps={{
                    startAdornment: <InputAdornment position="start">#</InputAdornment> }} />
                </div>
                <Divider/>
                
                <div style={{margin: 8, display: 'flex', flexDirection: 'column'}}>
                    <Progresso/>
                  <Typography>Escolha uma foto de Capa</Typography>
                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={storage.ref("images").child(`${nomeAlbum}`)}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                      />
                <div style={{display: 'flex', width: "100%", flexDirection: "row", justifyContent: "center" }}>
                  <Cardi imgcapa={capaURL} hashtag={hashtag} title={nomeAlbum} desc={descricaoAlbum} data={criadoEm} />
                </div>
                </div>
            </Grid>
          );
        case 1:
//PASSO2
          return (
            <div>
              <div>
                <MostraArquivos />
              </div>
              <Progresso />
              <FilesUploader />
              <Button onClick={startUploadManually}> Upload </Button>
            </div>
          );
        case 2:
          return 'This is the bit I really care about!';
        default:
          return 'Unknown stepIndex';
      }
    }

    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, nomeAlbum, descricaoAlbum, capaURL, criadoEm, hashtag, filesToStore } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel> {label} </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Divider/>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.passos}>Tudo ocorreu conforme o esperado!!!</Typography>
              <Button onClick={this.handleReset}>Resetar</Button>
            </div>
          ) : (
              <div>
                <div className={classes.passos}>
                  {getStepContent(activeStep)}
                </div>
                <div className={classes.bottonOptions}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                  >
                    Voltar
                </Button>
                  <Button variant="contained" color="primary" onClick={this.handleNext}>
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Avançar'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

UparAlbum.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(UparAlbum);


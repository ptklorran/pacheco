import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, TextField, Typography, Grow, Divider, Button, LinearProgress, Fade } from '@material-ui/core'
import { Camera, AddPhotoAlternate, BurstMode } from '@material-ui/icons'
import Moment from 'moment'
import 'moment/locale/pt-br'
import FileUploader from 'react-firebase-file-uploader'

import { storage } from '../../services/Firebase'
import { database } from '../../services/Firebase'

const styles = theme => ({
    root: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    alinhar: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        padding: theme.spacing.unit
    },
    card: {
        minHeight: 550
    },
    card1e3: {
        minHeight: 500,
        marginTop: 15
    },
    Media: {
        height: "200px"
    },
    hashTag: {
        color: '#EEEEEE',
        marginRight: '5px'
    },
    subtitulo: {
        paddingTop: '10px'
    },
    dataAction: {
        padding: '5px'
    },
    inputFile: {

    }
})

class Principal extends React.Component {
    state = {
        growCard: false,
        openCategoria: false,
        imgcapa: '',
        titulo: '',
        desc: '',
        hashtag: '',
        criadoEm: '',
        linksDoAlbum: [],
        filaDeFotos: [],
        //Abaixo dados do upload
        progress: '',
        capaProgress: '',
        isUploading: false,
        capaIsUploading: false,
        isUploadingLinearProgressAlbum: false,
        erro: '',
        capaErro: ''

    }

    componentDidMount() {
        setTimeout(() => this.setState({ growCard: true }), 200)
        const data = Moment().locale('pt-br').format('ll')
        this.setState({ criadoEm: data })
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
    handleUploadStartCapa = () => this.setState({ capaIsUploading: true, capaProgress: 0 })

    handleProgress = progress => this.setState({ progress })

    handleProgressCapa = capaProgress => this.setState({ capaProgress })

    handleUploadError = error => {
        this.setState({ isUploading: false, erro: error });
    }

    handleUploadErrorCapa = error => {
        this.setState({ capaisUploading: false, capeErro: error });
    }

    handleUploadSuccess = filename => {
        this.setState({ progress: 100, isUploading: false });
        storage
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.fileIncrement(url))
        this.setState({ isUploadingLinearProgressAlbum: false })
    }

    handleUploadSuccessCapa = filename => {
        storage
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ imgcapa: url, capaIsUploading: false }))
    }

    fileIncrement = (link) => {
        console.log('fileIncrement')
        const velhoLink = this.state.linksDoAlbum
        let novoLink = []

        velhoLink.map(item => novoLink.push(item))

        novoLink.push(link)

        this.setState({ linksDoAlbum: novoLink })

    }

    customOnChangeHandler = (event) => {
        const { target: { files } } = event;
        const filesToStore = [];

        for (let i = 1; i <= files.length; i++) {
            filesToStore.push(files[i - 1])
        }

        this.setState({ filaDeFotos: filesToStore, isUploading: true });
    }

    startUploadManually = () => {
        const { filaDeFotos } = this.state
        this.setState({ isUploadingLinearProgressAlbum: true })
        filaDeFotos.forEach(file => {
            this.fileUploader.startUpload(file)
            console.log('start manuall')
        })
        this.setState({ isUploadingLinearProgressAlbum: true })
    }

    render() {
        const { classes } = this.props
        const { growCard, linksDoAlbum } = this.state

        const MostraFotosUpadas = () => {
            if (linksDoAlbum.length !== 0) {
                return (
                    linksDoAlbum.map(item => <img key={item} style={{ margin: 3, borderRadius: 5 }} alt="foto" src={item.toString()} height="60" />)
                )
            } else {
                return null
            }
        }

        const uparAlbum = () => {
            const { imgcapa, titulo, desc, hashtag, criadoEm, linksDoAlbum } = this.state
            if (imgcapa === '') {
                alert('Ops, parece que vc esqueceu de escolher uma foto de capa')
            } else if (titulo === '') {
                alert('Ops, parece que vc esqueceu o título do Album')
            } else if (desc === '') {
                alert('Ops, parece que vc esqueceu a descrição do Album')
            } else if (hashtag === '') {
                alert('Ops, parece que falta a hashtag do Album')
            } else {
                database.ref().child("albuns").push({
                    imgcapa: imgcapa,
                    titulo: titulo,
                    desc: desc,
                    hashtag: hashtag,
                    criadoEm: criadoEm,
                    linksDoAlbum: linksDoAlbum
                })
            }
        }

        return (
            <div className={classes.root}>
                <Grid container justify="center">
                    { /* Grid para inserir o endereço */}
                    <Grow in={growCard} >
                        <Grid className={classes.gridItem} item xs={12} sm={3}>
                            <Card className={classes.card1e3}>
                                <CardContent className={classes.alinhar} >
                                    <Camera />
                                </CardContent>
                                <CardContent>
                                    <Typography style={{ marginBottom: 8 }} align="center" variant="h6">1.Detalhes</Typography>
                                    <Divider />
                                    <TextField
                                        style={{ marginTop: 12 }}
                                        id="standard-full-width"
                                        fullWidth
                                        label="Nome do Álbum"
                                        variant="outlined"
                                        onChange={e => this.setState({ titulo: e.target.value })}
                                        value={this.state.titulo}
                                    ></TextField>
                                    <TextField
                                        onChange={e => this.setState({ desc: e.target.value })}
                                        value={this.state.desc}
                                        style={{ marginTop: 12 }} id="standard-full-width" fullWidth label="Descrição" variant="outlined"></TextField>
                                    <TextField
                                        onChange={e => this.setState({ hashtag: e.target.value })}
                                        value={this.state.hashtag}
                                        style={{ marginTop: 12 }} id="standard-full-width" fullWidth label="Hashtag" variant="outlined"></TextField>
                                    <TextField
                                        value={this.state.criadoEm}
                                        style={{ marginTop: 12 }} id="standard-full-width" fullWidth label="Data de Criação" variant="outlined"></TextField>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: '35px' }}>
                                        <label style={{ backgroundColor: '#222', color: 'white', padding: 10, width: '100%', margin: 8, borderRadius: 5, cursor: 'pointer' }}>
                                            <Typography style={{ color: '#fff' }} variant="button" align="center" >SELECIONE UMA FOTO DE CAPA</Typography>
                                            <FileUploader
                                                hidden
                                                accept="image/*"
                                                name="fotoCapa"
                                                storageRef={storage.ref("images")}
                                                onUploadStart={this.handleUploadStartCapa}
                                                onUploadError={this.handleUploadErrorCapa}
                                                onUploadSuccess={this.handleUploadSuccessCapa}
                                                onProgress={this.handleProgressCapa}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <Fade in={this.state.capaIsUploading} >
                                            <LinearProgress variant="determinate" value={this.state.capaProgress} />
                                        </Fade>
                                    </div>
                                </CardContent>
                                <CardActions>

                                </CardActions>
                            </Card>
                        </Grid>
                    </Grow>
                    { /* Grid para o cardápio */}
                    <Grow in={growCard}>
                        <Grid className={classes.gridItem} item xs={12} sm={3}>
                            <Card className={classes.card}>
                                <CardContent className={classes.alinhar}>
                                    <AddPhotoAlternate />
                                </CardContent>
                                <CardContent>
                                    <Typography style={{ marginBottom: 8 }} align="center" variant="h6">2.Fotos do Álbum</Typography>
                                    <Divider />

                                    <Fade in={this.state.isUploading} >
                                        <Typography align="center" variant="button">{this.state.filaDeFotos.length} fotos selecionadas</Typography>
                                    </Fade>
                                    <Fade in={this.state.isUploadingLinearProgressAlbum}>
                                        <LinearProgress variant="determinate" value={this.state.progress} />
                                    </Fade>

                                    <Grid style={{ overflow: 'auto', maxHeight: '500px' }} >
                                        <MostraFotosUpadas />
                                    </Grid>

                                </CardContent>
                                <CardActions>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                                        <label style={{ backgroundColor: '#222', color: 'white', padding: 10, margin: 8, borderRadius: 4, width: '100%', cursor: 'pointer' }}>
                                            <Typography style={{ color: '#fff' }} variant="button" align="center" >1.SELECIONE AS FOTOS</Typography>
                                            <FileUploader
                                                hidden
                                                accept="image/*"
                                                multiple
                                                randomizeFilename
                                                storageRef={storage.ref("images")}
                                                onUploadStart={this.handleUploadStart}
                                                onUploadError={this.handleUploadError}
                                                onUploadSuccess={this.handleUploadSuccess}
                                                onProgress={this.handleProgress}
                                                ref={instance => { this.fileUploader = instance }}
                                                onChange={this.customOnChangeHandler}
                                            />
                                        </label>
                                        <label style={{ backgroundColor: '#222', color: 'white', padding: 10, margin: 8, borderRadius: 4, width: '100%', cursor: 'pointer' }} onClick={this.startUploadManually}>
                                            <Typography align="center" variant="button" style={{ color: 'white' }}>
                                                2.Começar Upload
                                            </Typography>
                                        </label>
                                    </div>

                                </CardActions>
                            </Card>
                        </Grid>
                    </Grow>

                    { /* Grid para adicionar produtos a lista */}
                    <Grow in={growCard}>
                        <Grid className={classes.gridItem} item xs={12} sm={3}>
                            <Card className={classes.card1e3}>
                                <CardActionArea className={classes.alinhar}>
                                    <CardContent>
                                        <BurstMode />
                                    </CardContent>
                                </CardActionArea>
                                <CardContent>
                                    <Typography style={{ marginBottom: 8 }} align="center" variant="h6">3.Pré-Visualização</Typography>
                                    <Divider />
                                    <Card>

                                        <CardMedia
                                            className={classes.Media}
                                            image={this.state.imgcapa}
                                        >
                                            <Typography align="right" variant="subtitle2" className={classes.hashTag}>
                                                <span>#{this.state.hashtag}</span>
                                            </Typography>
                                        </CardMedia>

                                        <CardContent>
                                            <Typography className={classes.titulo} align="center" variant="body1">
                                                {this.state.titulo}
                                            </Typography>
                                            <Divider />
                                            <Typography align="center" variant="body2" className={classes.subtitulo}>
                                                {this.state.desc}
                                            </Typography>
                                        </CardContent>

                                        <Divider />

                                        <CardActions>
                                            <Typography variant="body2" align="left" className={classes.dataAction}>
                                                {this.state.criadoEm}
                                            </Typography>
                                        </CardActions>

                                    </Card>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={uparAlbum} style={{ width: '100%', background: '#222', color: '#FFF' }} >
                                        Fechar Album...
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grow>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Principal)
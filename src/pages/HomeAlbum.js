import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, IconButton, Typography, GridList, GridListTile } from '@material-ui/core'
import { ArrowBack, Archive, CloudDownload } from '@material-ui/icons'
import {saveAs} from 'file-saver'

import { database } from '../services/Firebase'

const styles = theme => ({
    FotosRollsDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'linear-gradient(45deg, #000000, #000000)'
    },
    rootToolbar: {
        display: 'flex',
        height: '10vh',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    FotosRollDivExterna: {
        height: '20vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'linear-gradient(45deg, #000000, #434343)'
    },
    FotosRollDivInterna: {
        cursor: 'pointer',
        backgroundColor: '#434343'
    },
    FotosRollImg: {
        width: '100%',
        borderRadius: '2px'
    },
    FotosRollDiv: {
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: 'linear-gradient(45deg, #000000, #434343)'
    }
})

class HomeAlbum extends React.Component {
    state = {
        album: null,
        fotoSelecionada: '',
        indexFotoSelecionada: ''
    }

    getAlbum() {
        const { params } = this.props.match
        const query = database.ref(`/albuns/${params.id}`)

        query.on('value', childSnapshot => {
            let item = childSnapshot.val()
            item['key'] = childSnapshot.key
            this.setState({ album: item, fotoSelecionada: item.imgcapa })
        })
    }

    componentDidMount() {
        this.getAlbum()
    }

    render() {

        const { album } = this.state
        const { classes } = this.props

        const saveImage = (item, index) => {
            var img = new Image()
            img.src = item
            var file = new File([item], `${index}.jpeg`, { type: "image.*" })
            saveAs(file)
        }

        const FotosRoll = () => {
            if (album !== null) {
                return (
                    album.linksDoAlbum.map((item, index) => {
                        return (
                            <Paper style={{ width: '350px', padding: 5, margin: 5, backgroundColor: '#333' }} onClick={() => this.setState({ fotoSelecionada: item, indexFotoSelecionada: index })}>
                                <img src={item} alt={item} className={classes.FotosRollImg} />
                                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }} >
                                    {/** 
                                        <IconButton component="a" onClick={() => saveImage(item, index)} >
                                            <Archive style={{ color: '#999' }} />
                                        </IconButton>
                                    */}
                                </div>
                            </Paper>
                        )
                    })
                )
            } else {
                return null
            }  
        }

        const ListTile = () => {
            if (this.state.album !== null) {
                return (
                    this.state.album.linksDoAlbum.map(item => {
                        return(
                            <GridListTile cols={1} >
                                <img src={item} alt={item} />
                            </GridListTile>
                        )
                    })
                )
            } else {
                return null
            }
        }

        return (
            <div className={classes.root} >
                <div className={classes.rootToolbar} >
                    <IconButton onClick={() => this.props.history.push('/')}>
                        <ArrowBack style={{ color: '#666' }} />
                    </IconButton>
                    <Typography align="center" variant="subtitle2" style={{ color: 'white', width: '100%' }}>
                        {this.state.album !== null ? this.state.album.titulo : "Título"}
                    </Typography>
                    <IconButton onClick={() => { }}>
                        <CloudDownload style={{ color: '#666' }} />
                    </IconButton>
                </div>
                <div className={classes.FotosRollDiv}>
                    <GridList cellHeight={160} styles={{ width: '100%' }} cols={5}>
                        <ListTile />
                    </GridList>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(HomeAlbum)

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { database } from '../services/Firebase'

const styles = theme => ({
    imagem: {
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down('md')]: {
            width: '60%'
        },
        [theme.breakpoints.down('lg')]: {
            width: '55%'
        }
    }
})

class HomeAlbum extends React.Component {
    state = {
        album: null
    }

    getAlbum() {
        const { params } = this.props.match
        const query = database.ref(`/albuns/${params.id}`)

        query.on('value', childSnapshot => {
            let item = childSnapshot.val()
            item['key'] = childSnapshot.key
            this.setState({ album: item })
        })
    }

    componentDidMount() {
        this.getAlbum()
    }

    render() {

        const { classes } = this.props

        const Sliders = () => {
            if (this.state.album !== null) {
                return (
                    <Carousel>
                        {
                            this.state.album.linksDoAlbum.map(item => {
                                return (
                                    <div style={{}}>
                                        <div style={{ height: '40px' }} >
                                            <a href={item} download style={{ color: 'white' }}>Baixar Foto</a>
                                        </div>
                                        <img className={classes.imagem} src={item} alt={item} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                )
            } else {
                return <div />
            }
        }

        return (
            <div style={{ maxHeight: '100vh', width: '100%' }}>
                <Sliders />
            </div>
        )
    }
}

export default withStyles(styles)(HomeAlbum)

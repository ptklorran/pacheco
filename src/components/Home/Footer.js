import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { IconButton, 
    Grid,
    Typography,
    Button
} from '@material-ui/core'

import FaceIcon from '../../sources/facebook.png'
import WhatsIcon from '../../sources/whatsapp.png'
import InstaIcon from '../../sources/instagram.png'

const style = theme => ({
    heightIcon: {
        height: 30,
    },
    bgIconButton: {
        backgroundColor: '666',
        margin: 0,
        padding: 1,
        marginLeft: 10,
        marginRight: 10
    }
})

class Footer extends React.Component {
    state = {
        //dadossty
    }

    render() {

        const {classes} = this.props

        return (
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '100%', paddingTop: 32, paddingBottom: 32, backgroundColor: '#414345' }}>
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <Grid item xs={12} md={4}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 20, backgroundColor: '#414345', alignItems: 'center' }} >
                            <Typography variant="subtitle2" style={{ color: 'white' }} >
                                Nos siga nas Redes Sociais
                            </Typography>

                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 5, paddingRight: 0, paddingLeft: 0 }}>
                                <IconButton 
                                    className={classes.bgIconButton}
                                    component="a"
                                    href="https://www.facebook.com/bonsaiproducoes/"
                                    target="_blank"    
                                > 
                                    <img src={FaceIcon} className={ classes.heightIcon } alt="faceIcon" />
                                </IconButton>
                                
                                <IconButton 
                                    component="a"
                                    href="https://www.instagram.com/bonsaiproducoes_"
                                    target="_blank"
                                    className={classes.bgIconButton} > <img src={InstaIcon} className={ classes.heightIcon } alt="faceIcon" /> </IconButton>
                                
                                <IconButton 
                                    component="a"
                                    href="https://wa.me/5596991541808"
                                    target="_blank"
                                    className={classes.bgIconButton} > <img src={WhatsIcon} className={ classes.heightIcon } alt="faceIcon" /> </IconButton>
                            </div>

                        </div>
                    </Grid>
                    
                    <Grid item xs={12} md={4}>
                        <div style={{ width: '100%', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography variant="subtitle2" style={{ color: 'white' }} >
                                Site
                            </Typography>
                            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column' }}>
                                <Button
                                    href="/loginvalidator"
                                    style={{ color: '#fff', width: '100%' }}
                                >
                                    Login
                                </Button>
                                <Button
                                    href="/loginvalidator"
                                    style={{ color: '#fff', width: '100%' }}
                                >
                                    Pesquisar
                                </Button>
                                <Button
                                    href="/loginvalidator"
                                    style={{ color: '#fff', width: '100%' }}
                                >
                                    Todos os Albuns
                                </Button>
                            </div>
                        </div>
                    </Grid>
            
                    <Grid item xs={12} md={4}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography variant="subtitle2" style={{ color: 'white' }} >
                                Contato
                            </Typography>
                        </div>
                    </Grid>
                    
                </div>
                
            </div>
        )
    }
}

export default withStyles(style)(Footer)
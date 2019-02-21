import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
    IconButton,
    Grid,
    Chip,
    Avatar,
    Typography
} from '@material-ui/core'

import FaceIcon from '../../sources/facebook.png'
import WhatsIcon from '../../sources/whatsapp.png'
import InstaIcon from '../../sources/instagram.png'
import Logo from '../../sources/logo_bonsai.png'

const style = theme => ({
    heightIcon: {
        height: 30,
    },
    bgIconButton: {
        backgroundColor: '#f2f2f2',
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

        const { classes } = this.props

        return (
            <div style={{ height: '50vh', borderTop: '1px solid #666', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%', paddingTop: 32, paddingBottom: 32, backgroundImage: 'linear-gradient(#f9d423, #e65c00)' }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <Grid item xs={12} md={12}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 20, alignItems: 'center' }} >
                            
                            <img src={Logo} height="130" alt="Logo" />

                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 5, paddingRight: 0, paddingLeft: 0, marginTop: 24 }}>
                                <IconButton
                                    className={classes.bgIconButton}
                                    component="a"
                                    href="https://www.facebook.com/bonsaiproducoes/"
                                    target="_blank"
                                >
                                    <img src={FaceIcon} className={classes.heightIcon} alt="faceIcon" />
                                </IconButton>

                                <IconButton
                                    component="a"
                                    href="https://www.instagram.com/bonsaiproducoes_"
                                    target="_blank"
                                    className={classes.bgIconButton} > <img src={InstaIcon} className={classes.heightIcon} alt="faceIcon" /> </IconButton>

                                <IconButton
                                    component="a"
                                    href="https://wa.me/5596991541808"
                                    target="_blank"
                                    className={classes.bgIconButton} > <img src={WhatsIcon} className={classes.heightIcon} alt="faceIcon" /> </IconButton>
                            </div>

                        </div>
                    </Grid>

                </div>

                <div style={{ marginTop: 24, paddingBottom: 10, justifyContent: 'center', width: '100%', alignItems: 'center', bottom: 0, display: 'flex', flexDirection: 'row' }} >
                    
                    <Typography variant="subtitle2" >
                        Desenvolvido Por 
                    </Typography>
                    
                </div>
                <div style={{  paddingBottom: 10, justifyContent: 'center', width: '100%', alignItems: 'center', bottom: 0, display: 'flex', flexDirection: 'row' }} >
                    <Chip
                        avatar={
                            <Avatar src="https://firebasestorage.googleapis.com/v0/b/fir-app-9f297.appspot.com/o/alxgiusti.PNG?alt=media&token=ca9566a5-cee9-41c9-bade-ecc23215c40c" alt="Programadora Front End"/>
                    
                        }
                        label="Alexânia Giusti"
                        variant="outlined"
                        
                    />
                    
                </div>
                <div style={{paddingBottom: 10, flexWrap: 'wrap', justifyContent: 'center', width: '100%', alignItems: 'center', bottom: 0, display: 'flex', flexDirection: 'row' }} >

                    <Chip
                        avatar={
                            <Avatar src="https://firebasestorage.googleapis.com/v0/b/fir-app-9f297.appspot.com/o/ptk.PNG?alt=media&token=8b54294f-fc78-43b7-9ddf-4b373517b1b5" alt="Programadora Front End"/>
                    
                        }
                        label="Patrick Ramos"
                        variant="outlined"
                        
                    />
                    
                </div>

            </div>
        )
    }
}

export default withStyles(style)(Footer)
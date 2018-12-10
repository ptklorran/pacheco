import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Divider } from '@material-ui/core'

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: '4px',
    },
    Media: {
        height: "200px"
    },
    hashTag: {
        color: '#EEEEEE',
        marginRight: '5px'
    },
    titulo: {
        fontFamily: 'Charmonman, cursive'
    },
    subtitulo: {
        fontFamily: 'Charmonman, cursive',
        paddingTop: '10px'
    },
    dataAction: {
        fontFamily: 'Charmonman, cursive',
        flexGrow: 1,
        padding: '5px'
    },btnAction: {
        fontFamily: 'Charmonman, cursive'
    }
})

const Cardi = props => {
    const { classes } = props

    return(
        <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.Media}
                    image="https://www.corvomotion.com.br/public/main/assets/images/media/artigos/2017040607060558e6bbcdb2042/2017040607060558e6bbcdb2042.jpg"
                >
                    <Typography align="right" className={classes.hashTag}>
                        <strong>#hashtag</strong>
                    </Typography>
                </CardMedia>

                <CardContent>
                    <Typography className={classes.titulo} align="center" variant="h4">
                        Title 
                    </Typography>
                    <Divider />
                    <Typography align="center" variant="h5" className={classes.subtitulo}>  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet tellus in eros consequat venenatis.
                    </Typography>
                </CardContent>
                
                <Divider />
                
                <CardActions>
                    <Typography className={classes.dataAction}>
                        01/08/1993
                    </Typography>
                    <Button href="/paineladmin" className={classes.btnAction}>Veja Mais</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default withStyles(styles)(Cardi)
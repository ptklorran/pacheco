import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Divider } from '@material-ui/core'

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: '4px',
        backgroundColor: '#000'
    },
    Media: {
        height: "200px",
        marginBottom: 0,
        paddingBottom: 0
    },
    hashTag: {
        color: '#EEEEEE',
        marginRight: '5px'
    },
    dataAction: {
        flexGrow: 1,
        padding: '5px'
    },
    titulo: {
        margin: 5
    },
    subtitulo: {
        margin: 5,
        color: '#666'
    }
})

class Cardi extends React.Component {

    render() {

        const { classes } = this.props

        return (
            <Grid item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.Media}
                        image={this.props.imgcapa}
                    >
                        <Typography variant="subtitle2" align="right" className={classes.hashTag}>
                            <span>#{this.props.hashtag}</span>
                        </Typography>
                    </CardMedia>

                    <CardContent style={{ backgroundColor: '#FFF', marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }} >
                        <Typography className={classes.titulo} align="center" variant="button">
                            {this.props.titulo}
                        </Typography>
                        <Typography align="center" variant="subtitle2" className={classes.subtitulo}>
                            {this.props.desc}
                        </Typography>
                        <Divider style={{ backgroundColor: '#dcdcdc', marginTop: 5 }} />
                    </CardContent>

                    <CardActions style={{ backgroundColor: '#FFF', marginTop: 0, paddingTop: 8 }}>
                        <Typography variant="body2" className={classes.dataAction}>
                            {this.props.criadoEm}
                        </Typography>
                        <Button component="a" href={`/album/${this.props.id}`}>Veja Mais</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}


export default withStyles(styles)(Cardi)
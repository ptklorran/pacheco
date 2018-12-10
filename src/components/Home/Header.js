import React from 'react'

import { Grid, Typography, IconButton, Toolbar, CssBaseline, Card, CardMedia, CardContent} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Lock'


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    gridPai: {
        flexGrow: 1,
        color: "#555"
    },
    grow: {
        flexGrow: 1,
        color: "#fff"
    },
    MenuIcon: {
        color: '#fff'
    },
    CardMedia: {
        height: '400px',
        backgroundImage: 'linear-gradient(to bottom, rgba(240,0,0,0), rgba(255,0,0,1))'
    },
    demo: {
        height: '400px'
    },
    PaddingGrid: {
        height: '100px'
    },
    corDestaque: {
        color: '#fff',
        padding: '4px'
    }
})

const Header = props => {
    const { classes } = props
    return(
        <Grid className={classes.gridPai} xs={12} sm={12}>
            <CssBaseline />
            <Card>
                <CardMedia
                    className={classes.CardMedia}
                    image="https://www.corvomotion.com.br/public/main/assets/images/media/artigos/2017040607060558e6bbcdb2042/2017040607060558e6bbcdb2042.jpg"
                >
                    <Toolbar className={classes.tBar}>
                        <Typography variant="h6" className={classes.grow}>
                            Bonsai Produções
                        </Typography>

                        <IconButton href="/paineladmin">
                            <MenuIcon className={classes.MenuIcon} />
                        </IconButton>
                    </Toolbar>
                    
                    <CardContent >
                        <Grid className={classes.root} container xs={12} sm={12}>
                            <Grid item xs={12} sm={12}>
                                <Grid className={classes.demo} direction="column" alignItems="center" justify="flex-end">
                                    <Grid className={classes.PaddingGrid}></Grid>

                                    <Typography className={classes.corDestaque} align="center" variant="display1">
                                    DESTAQUE
                                    </Typography>

                                    <Typography className={classes.corDestaque} align="center" variant="heading">
                                        23/02/2066
                                    </Typography>

                                    <Typography className={classes.corDestaque} align="center" variant="subheading">
                                        O asdasdsadasd asdasdsad s iqjwieeijq qiuwiuieuiq qiuwiue qiquwiue qiuwiue qiu wie iq qiu wiue 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardMedia>
            </Card>
        </Grid>
    )
}

export default withStyles(styles)(Header);
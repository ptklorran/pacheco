import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const styles = theme => ({
    root: {
        flexGrow: 1
    }
})

class HomeAlbum extends React.Component {
    
    state = {
    }


    getAlbum() {
        const { params } = this.props.match
        console.log('params', params.id)
    }

    componentDidMount() {
        this.getAlbum()
    }

    render() {

        const { classes } = this.props
        const { params } = this.props.match
        return (
            <div className={ classes.root }>
                <Grid container>
                    {params.id}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(HomeAlbum)
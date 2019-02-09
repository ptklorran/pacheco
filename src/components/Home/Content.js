import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import Cardi from '../Cardi'

import { database } from '../../services/Firebase'
//import FireServices from '../../services/FirebaseServices'

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '97%',
        flexWrap: 'wrap',
        backgroundImage: '#000'
    },
    fontRecente: {
        padding: '5px',
        paddingBottom: '1px',
        color: '#fff'
    }
})
    
class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            albuns: [],
            splashscreen: true
        }
    }

    getAlbuns() {
        const query1 = database.ref('albuns').limitToLast(8)
        const query = query1.orderByValue()
        this.setState({ albuns: [] })
        let albuns = []
        query.on('value', dataSnapshot => {
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val()
                item['key'] = childSnapshot.key
                albuns.push(item)
            })

            albuns.reverse()
            this.setState({ albuns, splashscreen: false })

            albuns = []
        })
        return query
    }

    componentDidMount() {
        //FireServices.getData('teste', (dados) => console.log('dates', dados))
        this.getAlbuns()
    }

    render() {
        const { classes } = this.props

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundImage: '#000' }} >
                <div className={classes.root}>
                    <Grid md11 sm11 container>
                        <Typography variant="subtitle2" className={classes.fontRecente}>
                            Recentes
                    </Typography>
                    </Grid>
                </div>
                <div className={classes.root}>
                    {this.state.albuns.map(
                        item => <Cardi key={item.key} hashtag={item.hashtag} imgcapa={item.imgcapa} titulo={item.titulo} desc={item.desc} criadoEm={item.criadoEm} />
                    )}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Content)
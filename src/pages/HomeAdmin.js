import React from 'react'

import { Grid } from '@material-ui/core'

import Header from '../components/HomeAdmin/Header'
import Content from '../components/HomeAdmin/Content'
import Footer from '../components/Footer'

class PainelAdmin extends React.Component {
    render() {
        return(
            <div>
                <Grid container xs={12} sm={12}>
                    <Grid item xs={12} sm={12}>
                        <Header />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <Content />
                    </Grid>
                    
                    <Grid item xs={12} sm={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default PainelAdmin
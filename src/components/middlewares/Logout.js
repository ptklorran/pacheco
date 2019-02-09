import React, { Component } from 'react'
import { auth } from '../../services/Firebase'
import { Typography } from '@material-ui/core'

export default class Logout extends Component {
    
    componentDidMount() {
        auth.signOut()
        this.props.history.push('/')
    }
    render() {
        return (
            <Typography> Saindo... </Typography>
        )
    }
}
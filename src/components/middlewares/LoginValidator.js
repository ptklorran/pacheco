import React from 'react'
import { auth } from '../../services/Firebase'

export default class LoginValidator extends React.Component {
    
    componentDidMount() {
        auth.onAuthStateChanged(
            (user) => {
                if (user) {
                    return this.props.history.push('/homeadmin')
                } else {
                    return this.props.history.push('/login')
                }
            }
        )
    }

    render() {
        return null
    }
}
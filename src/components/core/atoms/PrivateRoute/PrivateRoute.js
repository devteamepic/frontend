import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Test from  '../../test'

export const PrivateRoute = ({ loggedIn, ...rest }) => {
    return (
            loggedIn
                ? <Test />
            : <Redirect to={{ pathname: '/login', state: { from: rest.location } }} />
    )
}

const mapStateToProps = (state) => {
    return { loggedIn : state.authenticate.loggedIn }
}

export default connect(mapStateToProps) (PrivateRoute)

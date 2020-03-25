import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export const PrivateRoute = ({ componenst: Component, loggedIn, ...rest }) => {
    return (
            loggedIn
                ? <Component {...rest}/>
            : <Redirect to={{ pathname: '/login', state: { from: rest.location } }} />
    )
}

const mapStateToProps = (state) => {
    return { loggedIn : state.authenticate.loggedIn }
}

export default connect(mapStateToProps) (PrivateRoute)

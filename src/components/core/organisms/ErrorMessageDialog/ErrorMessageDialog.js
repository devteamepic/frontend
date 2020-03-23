import React from 'react'
import ErrorMessage from '../../molecules/ErrorMessage/ErrorMessage'
import { connect } from 'react-redux'

const ErrorMessageDialog = ({ errors, ...props }) => {
    console.log(errors)
    return (
        <div>
          { Object.values(errors).map((error) =>
            <ErrorMessage
              key = { error }
              error = { error }
            />
        ) }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { errors : state.validationErrorMessage }
}

export default connect(mapStateToProps) (ErrorMessageDialog)

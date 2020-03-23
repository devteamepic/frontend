import React from 'react'
import ErrorMessage from '../../molecules/ErrorMessage/ErrorMessage'
import ErrorMessageDialogStyled from '../../../styled/organisms/errorMessageDialogStyled'
import { connect } from 'react-redux'

const ErrorMessageDialog = ({ errors, ...props }) => {
    console.log(errors)
    return (
        <ErrorMessageDialogStyled>
          { Object.values(errors).map((error) =>
            <ErrorMessage
              key = { error }
              error = { error }
            />
        ) }
        </ErrorMessageDialogStyled>
    )
}

const mapStateToProps = (state) => {
    return { errors : state.validationErrorMessage }
}

export default connect(mapStateToProps) (ErrorMessageDialog)

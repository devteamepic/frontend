import React, { useState, useEffect } from 'react'
import RegisterForm from './organisms/RegisterForm/RegisterForm'
import { connect } from 'react-redux'
import '../../App.css'
import colorScheme from '../../misc/colorScheme'
import ErrorMessageDialog from '../core/organisms/ErrorMessageDialog/ErrorMessageDialog'

const Test = ({ error, ...props }) => {
  const [isErrorMessage, setIsErrorMessage] = useState(error)

  useEffect(() => {
    setIsErrorMessage(error)
  }, [error])

    return (
        <div id='test'>
        { isErrorMessage && <ErrorMessageDialog/> }
          <RegisterForm
            colorScheme = { colorScheme }
          />
        </div>
    )
}

const mapStateToProps = (state) => {
  return { error : state.validationErrorMessage }
}

export default connect(mapStateToProps) (Test)

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Text from '../../atoms/Text/Text'
import ErrorDialog from '../../organisms/ErrorMessageDialog/ErrorMessageDialog'
import LoginForm from '../../organisms/LoginForm/LoginForm'
import colorScheme from '../../../../misc/colorScheme'
import LoginPageStyled from '../../../styled/pages/loginPageStyled'

const LoginPage = ({ error, ...props }) => {
    const [errorMessage, setErrorMessage] = useState(error)

    useEffect(() => {
        setErrorMessage(error)
    }, [error])

    return (
        <LoginPageStyled
          colorScheme = { colorScheme }
        >
          { errorMessage && <ErrorDialog/> }
          <div style={{ height: '100%', color: 'white', width: '100%', backgroundColor: colorScheme.denim, textAlign: 'center' }}>
            <Text
              size = 'large'
            >
              UNIFOUND
            </Text>
          </div>
            <LoginForm
              colorScheme = { colorScheme }
            />
        </LoginPageStyled>
    )
}

const mapStateToProps = (state) => {
    return { error: state.validationErrorMessage }
}

export default connect(mapStateToProps) (LoginPage)

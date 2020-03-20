import React from 'react'
import LoginForm from './molecules/LoginForm/LoginForm'
import RegisterForm from './molecules/RegisterForm/RegisterForm'
import { connect } from 'react-redux'
import '../../App.css'
import colorScheme from '../../misc/colorScheme'
import Text from '../core/atoms/Text/Text'

const Test = (props) => {

    return (
        <div id='test'>
          <RegisterForm
            colorScheme = { colorScheme }
          />
          <div style = {{ height: '10px' }}/>
           <LoginForm
            colorScheme = { colorScheme }
          />
        </div>
    )
}

const mapStateToProps = (state) => {
  return { files: state.files }
}

export default connect(mapStateToProps) (Test)

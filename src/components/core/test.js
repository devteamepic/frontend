import React from 'react'
import LoginForm from './molecules/LoginForm/LoginForm'
import { connect } from 'react-redux'
import '../../App.css'
import colorScheme from '../../misc/colorScheme'

const Test = (props) => {

    return (
        <div id='test'>
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

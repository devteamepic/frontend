import React from 'react'
import LoginForm from './molecules/LoginForm/LoginForm'
import { connect } from 'react-redux'
import '../../App.css'

const Test = (props) => {

    return (
        <div id='test'>
          <LoginForm/>
        </div>
    )
}

const mapStateToProps = (state) => {
  return { files: state.files }
}

export default connect(mapStateToProps) (Test)

import React from 'react'
import { connect } from 'react-redux'
import '../../App.css'

const Test = ({ error, ...props }) => {
  console.log(localStorage.getItem('token'))
    return (
        <div id='test'>
          alskfjlaskdfj
        </div>
    )
}

const mapStateToProps = (state) => {
  return { error : state.validationErrorMessage }
}

export default connect(mapStateToProps) (Test)
